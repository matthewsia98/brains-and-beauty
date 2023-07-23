import React, { useState } from "react";
import CartSummary from "./CartSummary";

function Checkout() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    shippingStreet: "",
    shippingCity: "",
    shippingPostalCode: "",
    firstNameCard: "",
    lastNameCard: "",
    cardNumber: "",
    cardCVC: "",
    billingStreet: "",
    billingCity: "",
    billingPostalCode: "",
  });

  const provinces = [
    "Province",
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Northwest Territories",
    "Nunavut",
    "Yukon",
  ];
  const tax_rates = {
    Province: 0,
    Alberta: 0.05,
    "British Columbia": 0.05,
    Manitoba: 0.05,
    "New Brunswick": 0.15,
    "Newfoundland and Labrador": 0.15,
    "Nova Scotia": 0.15,
    Ontario: 0.13,
    "Prince Edward Island": 0.15,
    Quebec: 0.05,
    Saskatchewan: 0.05,
    "Northwest Territories": 0.05,
    Nunavut: 0.05,
    Yukon: 0.05,
  };
  const months = [
    "Expiry Month",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const currentYear = 2023;
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

  const FormTitles = [
    "Shipping Information",
    "Payment Details",
    "Confirmation",
  ];
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);

  const [selectedShippingProvince, setSelectedShippingProvince] = useState(
    provinces[0],
  );
  const [selectedBillingProvince, setSelectedBillingProvince] = useState(
    provinces[0],
  );
  const [selectedExpiryMonth, setSelectedExpiryMonth] = useState(months[0]);
  const [selectedExpiryYear, setSelectedExpiryYear] = useState("Expiry Year");

  const addressInput = (addressPrefix) => {
    return (
      <div>
        <input
          className="form-field"
          type="text"
          placeholder="Street Address"
          style={{ width: "435px" }}
          value={formData[`${addressPrefix}Street`]}
          onChange={(e) => {
            setFormData({
              ...formData,
              [`${addressPrefix}Street`]: e.target.value,
            });
          }}
          required
        />
        <div className="row">
          <div className="col-6">
            <input
              className="form-field"
              type="text"
              placeholder="City"
              value={formData[`${addressPrefix}City`]}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  [`${addressPrefix}City`]: e.target.value,
                });
              }}
              required
            />
          </div>
          <div className="col-6">
            <select
              className="form-field"
              id="province"
              value={
                addressPrefix === "billing"
                  ? selectedBillingProvince
                  : selectedShippingProvince
              }
              onChange={(e) => {
                const selectedProvince = e.target.value;
                if (addressPrefix === "billing") {
                  setSelectedBillingProvince(selectedProvince);
                } else {
                  setSelectedShippingProvince(selectedProvince);
                }
              }}
              required
            >
              {provinces.map((province) => (
                <option
                  key={province}
                  value={province === "Province" ? "" : province}
                >
                  {province}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input
          className="form-field"
          type="text"
          placeholder="Postal Code"
          style={{ width: "435px" }}
          value={formData[`${addressPrefix}PostalCode`]}
          onChange={(e) => {
            setFormData({
              ...formData,
              [`${addressPrefix}PostalCode`]: e.target.value,
            });
          }}
          required
        />
      </div>
    );
  };

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <div>
          <div className="form-fields">
            <h5>Personal Information</h5>
            <div className="row">
              <div className="col-6">
                <input
                  className="form-field"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="col-6">
                <input
                  className="form-field"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
            <input
              className="form-field"
              type="text"
              placeholder="Phone Number"
              style={{ width: "435px" }}
              value={formData.phoneNumber}
              onChange={(e) => {
                setFormData({ ...formData, phoneNumber: e.target.value });
              }}
              required
            />
            <input
              className="form-field"
              type="text"
              placeholder="Email Address"
              style={{ width: "435px" }}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              required
            />
            <h5 className="mt-4">Shipping Address</h5>
            {addressInput("shipping")}
          </div>
        </div>
      );
    } else if (page === 1) {
      return (
        <div>
          <div className="form-fields">
            <h5>Credit/Debit Card Information</h5>
            <div className="row">
              <div className="col-6">
                <input
                  className="form-field"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstNameCard}
                  onChange={(e) => {
                    setFormData({ ...formData, firstNameCard: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="col-6">
                <input
                  className="form-field"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastNameCard}
                  onChange={(e) => {
                    setFormData({ ...formData, lastNameCard: e.target.value });
                  }}
                  required
                />
              </div>
            </div>

            <input
              className="form-field"
              type="text"
              placeholder="Card Number"
              style={{ width: "435px" }}
              value={formData.cardNumber}
              onChange={(e) => {
                setFormData({ ...formData, cardNumber: e.target.value });
              }}
              required
            />
            <div className="row">
              <div className="col-6">
                <select
                  className="form-field"
                  value={selectedExpiryMonth}
                  onChange={(e) => {
                    const selectedMonth = e.target.value;
                    setSelectedExpiryMonth(selectedMonth);
                  }}
                  required
                >
                  {months.map((month) => (
                    <option
                      key={month}
                      value={month === "Expiry Month" ? "" : month}
                    >
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <select
                  className="form-field"
                  value={selectedExpiryYear}
                  onChange={(e) => {
                    const selectedYear = e.target.value;
                    setSelectedExpiryYear(selectedYear);
                  }}
                  required
                >
                  <option value="" selected>
                    Expiry Year
                  </option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <input
              className="form-field"
              type="text"
              placeholder="CVC"
              style={{ width: "435px" }}
              value={formData.cardCVC}
              onChange={(e) => {
                setFormData({ ...formData, cardCVC: e.target.value });
              }}
              required
            />
            <h5 className="mt-4">Billing Address</h5>
          </div>
          <div style={{ marginLeft: "35px" }}>
            <input
              type="checkbox"
              id="same_as_shipping"
              name="same_as_shipping"
              className="ms-5"
              checked={isBillingSameAsShipping}
              onChange={() =>
                setIsBillingSameAsShipping(!isBillingSameAsShipping)
              }
            ></input>
            <label htmlFor="same_as_shipping" className="ms-1">
              Billing address same as shipping address
            </label>
          </div>
          <div className="form-fields">
            {!isBillingSameAsShipping && addressInput("billing")}
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Congratulations! Your order has been successfully placed. You should
            receive a confirmation email with the details of your order shortly.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            Please allow 2-3 business days for your order to be shipped. If you
            have any questions or need assistance, do not hesitate to contact
            our customer support.
          </p>
        </div>
      );
    }
  };

  const validate_input_and_go_next = () => {
    if (page === 0) {
      const first_name = formData.firstName;
      const last_name = formData.lastName;
      const email = formData.email;
      const address = formData.address;
      const city = formData.city;
      const province = selectedShippingProvince;
      const post_code = formData.shippingPostalCode;
      if (
        first_name != "" &&
        last_name != "" &&
        email != "" &&
        address != "" &&
        city != "" &&
        post_code != "" &&
        province != "Province"
      ) {
        setPage((currPage) => currPage + 1);
      }
    } else if (page === 1) {
      const first_name = formData.firstNameCard;
      const last_name = formData.lastNameCard;
      const card_number = formData.cardNumber;
      const expiry_month = selectedExpiryMonth;
      const expiry_year = selectedExpiryYear;
      const cvc = formData.cardCVC;
      const same_as_shipping =
        document.querySelector("#same_as_shipping").checked;
      const cc_info_filled =
        first_name != "" &&
        last_name != "" &&
        card_number != "" &&
        expiry_month != "Expiry Month" &&
        expiry_year != "Expiry Year" &&
        cvc != "";
      if (same_as_shipping) {
        if (cc_info_filled) {
          setPage((currPage) => currPage + 1);
        }
      } else {
        const address = formData.billingStreet;
        const city = formData.billingCity;
        const province = selectedBillingProvince;
        const post_code = formData.billingPostalCode;
        if (
          cc_info_filled &&
          address != "" &&
          city != "" &&
          province != "Province" &&
          post_code != ""
        ) {
          setPage((currPage) => currPage + 1);
        }
      }
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="form ms-5 my-5">
          <div className="progressbar">
            <div
              style={{
                width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <form>
            <div className="form-container">
              <div className="header">
                <h3>{FormTitles[page]}</h3>
              </div>
              <div className="body">{PageDisplay()}</div>
              <div className="footer">
                {page == 1 && (
                  <button
                    onClick={() => {
                      setPage((currPage) => currPage - 1);
                    }}
                  >
                    Prev
                  </button>
                )}
                {page !== 2 && (
                  <button
                    type="submit"
                    className="submit-button"
                    // onClick={() => {
                    //     setPage((currPage) => currPage + 1);
                    // }}
                    onClick={validate_input_and_go_next}
                  >
                    {page === 1 ? "Submit" : "Next"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-6" style={{ marginTop: "70px" }}>
        {" "}
        <CartSummary tax_rate={tax_rates[selectedShippingProvince]} />{" "}
      </div>
    </div>
  );
}

export default Checkout;
