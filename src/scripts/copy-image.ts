// Copies a printable page (poster, certificate) to the clipboard as a PNG.
// The white "paper" margin and drop shadow are dropped so the image is just
// the artwork, stretched to fill the full page size (keeping the letter
// aspect ratio) with transparent rounded corners.
import { toBlob } from 'html-to-image';

export function setupCopyButton(button: HTMLButtonElement, target: HTMLElement) {
  const label = button.textContent;
  const flash = (text: string) => {
    button.textContent = text;
    setTimeout(() => (button.textContent = label), 2000);
  };

  button.addEventListener('click', async () => {
    button.disabled = true;
    // Drop the paper margin on the live element (not just the copy) so
    // layout like `margin-top: auto` is recomputed for the bigger artwork
    // before html-to-image snapshots the computed styles.
    const original = target.style.cssText;
    Object.assign(target.style, { padding: '0', background: 'transparent', boxShadow: 'none' });
    target.classList.add('capturing');
    try {
      // Safari only allows clipboard writes started inside the click, so hand
      // it the pending blob instead of awaiting it first.
      const png = document.fonts.ready
        .then(() =>
          toBlob(target, {
            pixelRatio: 3,
            style: { margin: '0' },
          }),
        )
        .then((blob) => {
          if (!blob) throw new Error('Could not render image');
          return blob;
        });
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })]);
      flash('Copied!');
    } catch (err) {
      console.error(err);
      flash('Copy failed');
    } finally {
      target.classList.remove('capturing');
      target.style.cssText = original;
      button.disabled = false;
    }
  });
}
