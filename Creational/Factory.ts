interface TextDocument {
    type: string;
}

class WordDocument implements TextDocument {
    type = 'word';
}

class PDFDocument implements TextDocument {
    type: string = 'pdf';
}

abstract class TextEditor {
    abstract createDocument(): TextDocument;
}

class WordReader extends TextEditor {
    createDocument(): TextDocument {
        return new WordDocument();
    }
}

class PDFReader extends TextEditor {
    createDocument(): TextDocument {
        return new PDFDocument();
    }
}

const main = () => {
    const wordReader = new WordReader();
    const wordDoc = wordReader.createDocument();
    console.log(`Документ Word создан. Тип: ${wordDoc.type}`);

    const pdfReader = new PDFReader();
    const pdfDoc = pdfReader.createDocument();
    console.log(`Документ PDF создан. Тип: ${pdfDoc.type}`);

    const editors: TextEditor[] = [new WordReader(), new PDFReader()];
    
    console.log('\n--- Полиморфный вызов ---');
    editors.forEach((editor, index) => {
        const doc = editor.createDocument();
        console.log(`Редактор #${index + 1} создал документ типа: ${doc.type}`);
    });
}
