import { CheckIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { CopyIcon } from 'styles/icons';

export default function CopyBtn({ size, m, tableID }) {
  const [isCopied, setCopied] = useState(false);

  const handleClick = (tableID) => {
    selectElementContents(document.getElementById(tableID));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <Button
      variant="outline"
      isDisabled={!!isCopied}
      isLoading={false}
      loadingText="Copiando..."
      size={size}
      m={m}
      fontSize={{ base: '1rem', xxl: '1.25rem' }}
      padding={{ base: '0.5rem', xxl: '0.625rem 1.25rem' }}
      value="select table"
      onClick={() => handleClick(tableID)}
    >
      {isCopied ? (
        <>
          <CheckIcon mr="8px" /> Copiado!
        </>
      ) : (
        <>
          <CopyIcon mr="8px" />
          Copiar
        </>
      )}
    </Button>
  );
}

function selectElementContents(el) {
  var body = document.body,
    range,
    sel;
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(el);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(el);
      sel.addRange(range);
    }
    document.execCommand('copy');
    clearSelection();
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
    range.execCommand('Copy');
    clearSelection();
  }
}

function clearSelection() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}
