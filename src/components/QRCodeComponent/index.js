import QRCode from 'qrcode.react';

export default function QRCodeComponent({ url }) {
  return (
    <QRCode
      value={url}
      size={232}
      bgColor={'#ffffff'}
      fgColor={'#000000'}
      level={'L'}
      includeMargin={false}
      renderAs={'svg'}
      imageSettings={{
        src: `/apple-touch-icon.png`,
        x: null,
        y: null,
        height: 48,
        width: 48,
        excavate: true
      }}
    />
  );
}
