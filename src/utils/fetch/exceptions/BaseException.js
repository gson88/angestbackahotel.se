export default class BaseException {
  constructor (err) {
    this.errors = err.errors;
  }
}