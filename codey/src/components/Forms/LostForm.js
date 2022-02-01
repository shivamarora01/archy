import useInput from "../../hooks/use-input";
import validator from "validator";
import "./Form.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const isNotEmpty = (value) => value.trim() !== "";
const isValidDate = (value) => validator.isDate(value);

const LostForm = (props) => {
  const {
    value: itemNameValue,
    isValid: itemNameIsValid,
    hasError: itemNameHasError,
    valueChangeHandler: itemNameChangeHandler,
    inputBlurHandler: itemNameBlurHandler,
    reset: resetItemName,
  } = useInput(isNotEmpty);
  const {
    value: colorValue,
    isValid: colorIsValid,
    hasError: colorHasError,
    valueChangeHandler: colorChangeHandler,
    inputBlurHandler: colorBlurHandler,
    reset: resetColor,
  } = useInput(isNotEmpty);
  const {
    value: locationValue,
    isValid: locationIsValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    reset: resetLocation,
  } = useInput(isNotEmpty);
  const {
    value: dateValue,
    isValid: dateIsValid,
    hasError: dateHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isValidDate);

  let formIsValid = false;

  if (itemNameIsValid && colorIsValid && locationIsValid && dateIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(itemNameValue, colorValue, locationValue);

    resetItemName();
    resetColor();
    resetLocation();
    resetDate();
  };

  const itemNameClasses = itemNameHasError
    ? "form-control invalid"
    : "form-control";
  const colorClasses = colorHasError ? "form-control invalid" : "form-control";
  const locationClasses = locationHasError
    ? "form-control invalid"
    : "form-control";
  const dateClasses = dateHasError ? "form-control invalid" : "form-control";

  return (
    <Modal onClose={props.onClose}>
    <form className="my-form" onSubmit={submitHandler}>
      <h2 className="form-label">Lost Items Form</h2>
      <div className="form-container">
        <ul>
          <div className="control-group">
            <li>
              <div className="grid grid-2">
                <div className={itemNameClasses}>
                  <label htmlFor="name">Item Name</label>
                  <input
                    type="text"
                    id="name"
                    value={itemNameValue}
                    onChange={itemNameChangeHandler}
                    onBlur={itemNameBlurHandler}
                  />
                  {itemNameHasError && (
                    <p className="error-text">Please enter a item name.</p>
                  )}
                  {!itemNameHasError && (
                    <p>
                      <br />
                    </p>
                  )}
                </div>
                <div className={colorClasses}>
                  <label htmlFor="color">Color</label>
                  <input
                    type="text"
                    id="color"
                    value={colorValue}
                    onChange={colorChangeHandler}
                    onBlur={colorBlurHandler}
                  />
                  {colorHasError && (
                    <p className="error-text">Please enter a color.</p>
                  )}
                  {!colorHasError && (
                    <p>
                      <br />
                    </p>
                  )}
                </div>
              </div>
            </li>
            <li>
              <div className="grid grid-2">
                <div className={locationClasses}>
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={locationValue}
                    onChange={locationChangeHandler}
                    onBlur={locationBlurHandler}
                  />
                  {locationHasError && (
                    <p className="error-text">Please enter a valid location.</p>
                  )}
                  {!locationHasError && (
                    <p>
                      <br />
                    </p>
                  )}
                </div>
                <div className={dateClasses}>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={dateValue}
                    onChange={dateChangeHandler}
                    onBlur={dateBlurHandler}
                  />
                  {dateHasError && (
                    <p className="error-text">Please enter a valid Date.</p>
                  )}
                  {!dateHasError && (
                    <p>
                      <br />
                    </p>
                  )}
                </div>
              </div>
            </li>
          </div>
          <li>
            <div className="description">
              <label htmlFor="message">Message</label>
              <textarea id="message"></textarea>
            </div>
          </li>

          <div className="grid grid-3 form-actions">
            <Button type="submit" onClick={props.onClick} className="btn-grid" disabled={!formIsValid}>
              Submit
            </Button>
          </div>
        </ul>
      </div>
    </form>
    </Modal>
  );
};

export default LostForm;
