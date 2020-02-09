import axios from "axios";

export default {
  // Gets all groups
  getGroups: function() {
    return axios.get("/api/groups");
  },
  // Gets the group with the given id
  getGroup: function(id) {
    return axios.get("/api/groups/" + id);
  },
  // Deletes the group with the given id
  deleteGroup: function(id) {
    return axios.delete("/api/groups/" + id);
  },
  // Saves a group to the database
  saveGroup: function(groupData) {
    return axios.post("/api/groups", groupData);
  },
  // separating group from mebmers ~_~___~_~__~_~__~_~_~
  // test to get all members
  getMembers: function() {
    return axios.get("/api/members")
  },
  // test to get specific members
  getMember: function(groupID) {
    return axios.get("/api/members/" + groupID)
  },
  // this is to get specific members since the one above returns members per groupID
  getSpecificMember: function(id) {
    return axios.get("/api/members/member/" + id)
  },
  // test to save member
  saveMember: function(memberData) {
    return axios.post("/api/members", memberData)
  },
  // test to delete member
  deleteMember: function(id) {
    return axios.delete("/api/members/" + id);
  },
  // separating book from the rest ~_~_~_~~_~_~_~_~~_
  getBooks: function() {
    return axios.get("/api/books")
  },
  getBook: function(bookID) {
    return axios.get("/api/books/", bookID)
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData)
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id)
  },
  getBooksByMember: function(id) {
    return axios.get("/api/books/member/" + id)
  }
};
