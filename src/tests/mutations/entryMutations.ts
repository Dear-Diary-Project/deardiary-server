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
mutation CreateEntry($input: EntryInput!){
  createEntry(input:$input){
    id
    createdAt
    updatedAt
    title
  }
}`;
