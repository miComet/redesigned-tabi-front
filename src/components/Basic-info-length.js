import React, { useState } from "react";
import { Link } from "react-router-dom";

const TripLength = (props) => (
    <Link className="Trip" onClick={() => props.onClick(props.number)}>
        {props.number}
    </Link>
);

const BasicInfoLength = () => {
    const [trip, setTrip] = useState(1);
    return (
        <div>
            <div>
                <p>How many days do you tabi?</p>
            </div>
            <div>
                {[1, 3, 7].map((numberId) => (
                    <TripLength
                        key={numberId}
                        number={numberId}
                        onClick={() => setTrip(numberId)}
                    />
                ))}
            </div>
        </div>
    );
};

export default BasicInfoLength;
