import React from "react";

import "./CalendarStyles.css";

const Calendar = () => {
	return (
		<div>
			<div className="calendar-container">
				<div className="calendar">
					<iframe
						src="https://embed.styledcalendar.com/#EKAJaPSZDK2cWjLv6jB1"
						title="Styled Calendar"
						className="styled-calendar-container"
						style={{width: "100%", border: "none"}} //one must change the original style to this stylying from styled calendar lest there are issues 
						data-cy="calendar-embed-iframe">	
						</iframe>
						<script
						async
						type="module"
						src="https://embed.styledcalendar.com/assets/parent-window.js">

						</script>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
