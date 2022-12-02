import { observable } from "@legendapp/state";

const narrator = observable({
  inContract: null,
  text: "",
  visible: false,
});

export default narrator;
