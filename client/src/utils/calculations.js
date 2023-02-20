export const lengthConverter = (measurementUnits, measurement, imperialNum) => {
	if (measurementUnits === 'imperial') {
		return imperialNum;
	}

    // Imperial to metric conversions
	if (measurementUnits === 'metric') {
        // Inches to centimeters
		if (measurement === 'centimeter') {
			return (imperialNum * 2.54).toFixed(1);
		}
        // Feet to meters 

        // Yards to meters

        // Miles to Kilometers
	}
};

// export const weightConverter = (measurementUnits) => {}
