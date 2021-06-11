import axios from "axios";

const DOCUMENT_API_BASE_URL = "http://localhost:8081/api/document";

class DocumentService
{
    async getDocument() {
        return await axios.get(DOCUMENT_API_BASE_URL);
      }
      async CreateDocument(document) {
        //return await axios.post(STUDENT_API_BASE_URL + "/add", student);
        return await axios.post(DOCUMENT_API_BASE_URL, document);
      }
      async deleteDocumentById(documentid) {
        return await axios.delete(DOCUMENT_API_BASE_URL + "/" + documentid);
      }
      async updateDocumentById(documentid,document){
        return await axios.put(DOCUMENT_API_BASE_URL + "/i/" + documentid,document);
      }
      async getDocumentId(documentid){
        return await axios.get(DOCUMENT_API_BASE_URL + "/" +documentid);
      }
    }

    
export default new DocumentService()