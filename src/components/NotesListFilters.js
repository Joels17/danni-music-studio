import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/lib/css/_datepicker.css';

export class NotesListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({
			calendarFocused,
		}));
	};
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={this.onTextChange}
				/>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
                    showClearDates={true}
                    startDateId="start_date"
                    endDateId="end_date"
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesListFilters);
