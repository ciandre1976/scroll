import React from "react";

/*
ALABAMA ..........................................AL
ALASKA .............................................AK
ARIZONA ...........................................AZ
ARKANSAS........................................AR
CALIFORNIA......................................CA
COLORADO.......................................CO
CONNECTICUT.................................CT
DELAWARE.......................................DE
DISTRICT OF COLUMBIA.................DC
FLORIDA............................................FL
GEORGIA ..........................................GA
HAWAII...............................................HI
IDAHO................................................ID
ILLINOIS ............................................IL
INDIANA.............................................IN
IOWA..................................................IA
KANSAS.............................................KS
KENTUCKY........................................KY
LOUISIANA.........................................LA
MAINE ................................................ME
MARYLAND........................................MD
MASSACHUSETTS............................MA
MICHIGAN..........................................MI
MINNESOTA ......................................MN
MISSISSIPPI ......................................MS
MISSOURI..........................................MO
MONTANA..........................................MT
NEBRASKA........................................NE
NEVADA.............................................NV
NEW HAMPSHIRE.............................NH
NEW JERSEY ....................................NJ
NEW MEXICO ....................................NM
NEW YORK ........................................NY
NORTH CAROLINA ...........................NC
*/

const SelectElement = ({ handleStateChange }) => {
  return (
    <div>
      <label htmlFor="select">state</label>
      <br />
      <select name="select" onChange={handleStateChange}>
        <option value="WY">Wyoming</option>
        <option value="UT">Utah</option>
        <option value="MO">Missouri</option>
        <option value="NE">Nebraska</option>
        <option value="MS">Mississippi</option>
        <option value="WI">Wisconsin</option>
      </select>
    </div>
  );
};

export default SelectElement;
