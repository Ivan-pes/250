"""Prepare site photos: build `@sm` variants and regenerate src/data/photos.js.

Requires Pillow. Run from the project root:

    python3 scripts/photos.py
"""

import base64
import io
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = os.path.join(ROOT, 'public', 'images')
PHOTOS_JS = os.path.join(ROOT, 'src', 'data', 'photos.js')

SM_WIDTH = 760
BLUR_WIDTH = 20


def originals():
    """Return the source photos, skipping already generated @sm copies."""
    names = [f for f in os.listdir(IMAGES) if f.endswith('.jpg') and '@sm' not in f]
    return sorted(names)


def make_small(image, name):
    width = min(SM_WIDTH, image.width)
    height = round(image.height * width / image.width)
    small = image.resize((width, height), Image.LANCZOS)
    small.save(os.path.join(IMAGES, name.replace('.jpg', '@sm.jpg')),
               'JPEG', quality=78, optimize=True, progressive=True)


def make_blur(image):
    height = max(1, round(image.height * BLUR_WIDTH / image.width))
    tiny = image.resize((BLUR_WIDTH, height), Image.LANCZOS)

    buffer = io.BytesIO()
    tiny.save(buffer, 'JPEG', quality=40)
    return 'data:image/jpeg;base64,' + base64.b64encode(buffer.getvalue()).decode()


def main():
    lines = ['export const photos = {']

    for name in originals():
        image = Image.open(os.path.join(IMAGES, name)).convert('RGB')
        make_small(image, name)

        key = '/images/' + name
        lines.append(f"  '{key}': {{")
        lines.append(f"    sm: '/images/{name.replace('.jpg', '@sm.jpg')}',")
        lines.append(f"    blur: '{make_blur(image)}',")
        lines.append('  },')
        print('готово:', name)

    lines.append('};')

    with open(PHOTOS_JS, 'w') as file:
        file.write('\n'.join(lines) + '\n')

    print('\nphotos.js обновлён')


if __name__ == '__main__':
    main()
