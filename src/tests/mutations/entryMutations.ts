export const deleteEntryMutation = `mutation DeleteEntry($id : Number) {
  deleteEntry(id:$id)  
}`;

export const getEntryQuery = `
query GetEntry{
  entries{
    id
    createdAt
    updatedAt
    title
  }
}`;

export const createEntryMutation = `
mutation CreateEntry($title: String!){
  createEntry(title:"My Very First Entry"){
    id
    createdAt
    updatedAt
    title
  }
}`;
