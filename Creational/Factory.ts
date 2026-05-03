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
