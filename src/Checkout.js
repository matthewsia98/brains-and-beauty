import React, { useState } from "react";
import CartSummary from "./CartSummary";
function Checkout() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName:"",
    lastName: "",
    email:"",
    phoneNumber:"",
    shippingStreet:"",
    shippingCity:"",
    shippingPostalCode:"",
    firstNameCard:"",
    lastNameCard:"",
    cardNumber:"",
    cardCVC:"",
    billingStreet:"",
    billingCity:"",
    billingPostalCode:""

  });

  const provinces = [
    'Province',
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Northwest Territories',
    'Nunavut',
    'Yukon',
  ];
  const months = [
    'Expiry Month',
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12',
  ];
  const currentYear = 2023;
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

  const FormTitles = ["Shipping Information", "Payment Details", "Confirmation"];
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);

  const [selectedShippingProvince, setSelectedShippingProvince] = useState(provinces[0]);
  const [selectedBillingProvince, setSelectedBillingProvince] = useState(provinces[0]);
  const [selectedExpiryMonth, setSelectedExpiryMonth] = useState(months[0]);
  const [selectedExpiryYear, setSelectedExpiryYear] = useState("Expiry Year");

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     phoneNumber: Yup.string().required("Phone Number is required"),
//     emailAddress: Yup.string().email().required("Email Address is required"),
//     shippingStreet: Yup.string().required("Street Address is required"),
//     shippingCity: Yup.string().required("City is required"),
//     shippingPostalCode: Yup.string().required("Postal Code is required"),
//   });

//   const [formIsValid, setFormIsValid] = useState(false);
//   const isFormValid = async () => {
//     try {
//       await validationSchema.validate(formData, { abortEarly: false });
//       setFormIsValid(true)
//     } catch (errors) {
//         setFormIsValid(false)
//     }
//   };
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
            setFormData({ ...formData, [`${addressPrefix}Street`]: e.target.value });
          }}
        />
        <div className="row">
          <div className="col-6">
            <input
              className="form-field"
              type="text"
              placeholder="City"
              value={formData[`${addressPrefix}City`]}
              onChange={(e) => {
                setFormData({ ...formData, [`${addressPrefix}City`]: e.target.value });
              }}
            />
          </div>
          <div className="col-6">
            <select
              className="form-field"
              value={addressPrefix === "billing" ? selectedBillingProvince : selectedShippingProvince}
              onChange={(e) => {
                const selectedProvince = e.target.value;
                if (addressPrefix === "billing") {
                  setSelectedBillingProvince(selectedProvince);
                } else {
                  setSelectedShippingProvince(selectedProvince);
                }
              }}
            >
              {provinces.map((province) => (
                <option key={province} value={province}>
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
            setFormData({ ...formData, [`${addressPrefix}PostalCode`]: e.target.value });
          }}
        />
      </div>
    );
  };
  

  const PageDisplay = () => {
    if (page === 0) {
      return <div>    
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
            />
            </div>
        </div>
        <input
        className="form-field"
            type="text"
            placeholder="Phone Number"
            style={{width:"435px"}}
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, phoneNumber: e.target.value });
            }}
        />
        <input
        className="form-field"
            type="text"
            placeholder="Email Address"
            style={{width:"435px"}}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
        />
        <h5 className="mt-4">Shipping Address</h5>
        {addressInput("shipping")}
    </div>
    </div>;
    } else if (page === 1) {
        return <div>    
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
                />
                </div>
               </div>

                <input
                className="form-field"
                    type="text"
                    placeholder="Card Number"
                    style={{width:"435px"}}
                    value={formData.cardNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, cardNumber: e.target.value });
                    }}
                />
                <div className="row">
                <div className="col-6">
                <select className="form-field" 
                    value={selectedExpiryMonth}
                    onChange={(e) => {
                    const selectedMonth = e.target.value;
                    setSelectedExpiryMonth(selectedMonth)
                    }}>
                    {months.map((month) => (
                    <option key={month} value={month}>
                        {month}
                    </option>
                    ))}
                </select>
                </div>
                <div className="col-6">
                <select className="form-field"
                    value={selectedExpiryYear}
                    onChange={(e) => {
                    const selectedYear = e.target.value;
                    setSelectedExpiryYear(selectedYear)
                    }}
                >
                    <option disabled selected>
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
                style={{width:"435px"}}
                value={formData.cardCVC}
                onChange={(e) => {
                  setFormData({ ...formData, cardCVC: e.target.value });
                }}
            />
             <h5 className="mt-4">Billing Address</h5>
            </div>
            <div style={{marginLeft:"35px"}}>
            <input 
            type="checkbox"
            id="same_as_shipping"
            name="same_as_shipping"
            className="ms-5"
            checked={isBillingSameAsShipping} 
            onChange={() => setIsBillingSameAsShipping(!isBillingSameAsShipping)}></input>
            <label htmlFor="same_as_shipping" className="ms-1">Billing address same as shipping address</label>
            </div>
            <div className="form-fields">{!isBillingSameAsShipping && addressInput("billing")}</div>
        </div>;
    } else {

        return (
            <div  style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
              <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                Congratulations! Your order has been successfully placed. You should receive a confirmation email with the details of your order shortly.</p><p style={{ fontSize: "18px", lineHeight: "1.6" }}>Please allow 2-3 business days for your order to be shipped. If you have any questions or need assistance, do not hesitate to contact our customer support.
              </p>
            </div>
          );
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="form ms-5 my-5">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
          ></div>
        </div>
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
            onClick={() => {
                setPage((currPage) => currPage + 1);
            }}
          >
            {page === 1? "Submit" : "Next"}
          </button>
            )}
          </div>
        </div>
      </div>
      </div>
      <div className="col-6" style={{marginTop:"70px"}}> <CartSummary/> </div>
    </div>

   
  );
}

export default Checkout;

