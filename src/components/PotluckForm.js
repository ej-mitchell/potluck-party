import DatePicker from "react-datepicker";

function PotluckForm(props) {
  return (
    <div>
      <label>
        Name:
        <input
          value={props.potluckName}
          onChange={(e) => props.handlePotluckName(e.target.value)}
        />
      </label>

      <label>
        Date and Time:
        <DatePicker
          showTimeSelect
          selected={props.potluckDate}
          onChange={(e) => props.handlePotluckDate(e.target.value)}
        />
      </label>

      <label>
        Email Addresses:
        <input
          value={props.potluckEmails}
          onChange={(e) => props.handlePotluckEmails(e)}
        />
      </label>
    </div>
  );
}

export default PotluckForm;
