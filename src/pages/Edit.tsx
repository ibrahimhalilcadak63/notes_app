import { useOutletContext } from "react-router-dom";
import { Note, NoteData, Tag } from "../types";
import { Container } from "react-bootstrap";
import Form from "../components/Form";

type Props = {
  handleSubmit: (id: string, updatedData: NoteData) => void;
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const Edit = ({ handleSubmit, createTag, availableTags }: Props) => {
  // 'useOutletContext' ile 'note' tipini belirtiyoruz
  const note = useOutletContext<Note>(); 

  return (
    <Container className="py-5 mx-auto">
      <h2>Notu Düzenle</h2>

      {/* Form bileşenine doğru tipte 'handleSubmit' gönderiyoruz */}
      <Form
        handleSubmit={(updatedData: NoteData) => handleSubmit(note.id, updatedData)} 
        // "updatedData" tipi "NoteData"
        createTag={createTag}
        availableTags={availableTags}
        title={note.title}
        tags={note.tags}
        markdown={note.markdown}
      />
    </Container>
  );
};

export default Edit;
