import React, {Fragment} from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </Fragment>
        )}

        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"US"}
      />
    </div>
  )
}

export default Subtotal;
