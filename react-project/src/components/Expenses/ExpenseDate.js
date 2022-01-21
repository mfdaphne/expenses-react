import './ExpenseItem.css'
import './ExpenseDate.css'

function ExpenseDate(dateProps) {

    const date = dateProps.date.getDate();
    const month = dateProps.date.getMonth();
    const year = dateProps.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{date}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;