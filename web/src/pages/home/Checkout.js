import React from 'react';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';

function Shop() {
    return (
        <section className="shop">
            <div className="section-padding">
                <div className="container">
                    <div>
                        <div className="woocommerce">
                            <form name="checkout" method="post" className="checkout woocommerce-checkout" action="#" encType="multipart/form-data" noValidate="novalidate">
                                <div className="col2-set" id="customer_details">
                                    <div className="">
                                        <div className="woocommerce-billing-fields">
                                            <h3>Billing details</h3>
                                            <div className="woocommerce-billing-fields__field-wrapper">
                                                <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10">
                                                    <label htmlFor="billing_first_name" className="">First name&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                    <span className="woocommerce-input-wrapper"><input className="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="" autoComplete="given-name" type="text" /></span>
                                                </p>
                                                <p className="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20">
                                                    <label htmlFor="billing_last_name" className="">Last name&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                    <span className="woocommerce-input-wrapper"><input className="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="" autoComplete="family-name" type="text" /></span>
                                                </p>
                                                <p className="form-row form-row-wide" id="billing_company_field" data-priority="30">
                                                    <label htmlFor="billing_company" className="">Company name&nbsp;<span className="optional">(optional)</span></label>
                                                    <span className="woocommerce-input-wrapper"><input className="input-text " name="billing_company" id="billing_company" placeholder="" value="" autoComplete="organization" type="text" /></span>
                                                </p>
                                                <p className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated" id="billing_country_field" data-priority="40">
                                                    <label htmlFor="billing_country" className="">Country&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <select name="billing_country" id="billing_country" className="country_to_state country_select select2-hidden-accessible" autoComplete="country" tabIndex="-1" aria-hidden="true">
                                                            <option value="">Select a country…</option>
                                                            <option value="AX">Åland Islands</option>
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AL">Albania</option>
                                                            <option value="DZ">Algeria</option>
                                                            <option value="AS">American Samoa</option>
                                                            <option value="AD">Andorra</option>
                                                            <option value="AO">Angola</option>
                                                            <option value="AI">Anguilla</option>
                                                            <option value="AQ">Antarctica</option>
                                                            <option value="AG">Antigua and Barbuda</option>
                                                            <option value="AR">Argentina</option>
                                                            <option value="AM">Armenia</option>
                                                            <option value="AW">Aruba</option>
                                                            <option value="AU">Australia</option>
                                                            <option value="AT">Austria</option>
                                                            <option value="AZ">Azerbaijan</option>
                                                            <option value="BS">Bahamas</option>
                                                            <option value="BH">Bahrain</option>
                                                            <option value="BD" >Bangladesh</option>
                                                            <option value="BB">Barbados</option>
                                                            <option value="BY">Belarus</option>
                                                            <option value="PW">Belau</option>
                                                            <option value="BE">Belgium</option>
                                                            <option value="BZ">Belize</option>
                                                            <option value="BJ">Benin</option>
                                                            <option value="BM">Bermuda</option>
                                                            <option value="BT">Bhutan</option>
                                                            <option value="BO">Bolivia</option>
                                                            <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                            <option value="BA">Bosnia and Herzegovina</option>
                                                            <option value="BW">Botswana</option>
                                                            <option value="BV">Bouvet Island</option>
                                                            <option value="BR">Brazil</option>
                                                            <option value="IO">British Indian Ocean Territory</option>
                                                            <option value="VG">British Virgin Islands</option>
                                                            <option value="BN">Brunei</option>
                                                            <option value="BG">Bulgaria</option>
                                                            <option value="BF">Burkina Faso</option>
                                                            <option value="BI">Burundi</option>
                                                            <option value="KH">Cambodia</option>
                                                            <option value="CM">Cameroon</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CV">Cape Verde</option>
                                                            <option value="KY">Cayman Islands</option>
                                                            <option value="CF">Central African Republic</option>
                                                            <option value="TD">Chad</option>
                                                            <option value="CL">Chile</option>
                                                            <option value="CN">China</option>
                                                            <option value="CX">Christmas Island</option>
                                                            <option value="CC">Cocos (Keeling) Islands</option>
                                                            <option value="CO">Colombia</option>
                                                            <option value="KM">Comoros</option>
                                                            <option value="CG">Congo (Brazzaville)</option>
                                                            <option value="CD">Congo (Kinshasa)</option>
                                                            <option value="CK">Cook Islands</option>
                                                            <option value="CR">Costa Rica</option>
                                                            <option value="HR">Croatia</option>
                                                            <option value="CU">Cuba</option>
                                                            <option value="CW">Curaçao</option>
                                                            <option value="CY">Cyprus</option>
                                                            <option value="CZ">Czech Republic</option>
                                                            <option value="DK">Denmark</option>
                                                            <option value="DJ">Djibouti</option>
                                                            <option value="DM">Dominica</option>
                                                            <option value="DO">Dominican Republic</option>
                                                            <option value="EC">Ecuador</option>
                                                            <option value="EG">Egypt</option>
                                                            <option value="SV">El Salvador</option>
                                                            <option value="GQ">Equatorial Guinea</option>
                                                            <option value="ER">Eritrea</option>
                                                            <option value="EE">Estonia</option>
                                                            <option value="ET">Ethiopia</option>
                                                            <option value="FK">Falkland Islands</option>
                                                            <option value="FO">Faroe Islands</option>
                                                            <option value="FJ">Fiji</option>
                                                            <option value="FI">Finland</option>
                                                            <option value="FR">France</option>
                                                            <option value="GF">French Guiana</option>
                                                            <option value="PF">French Polynesia</option>
                                                            <option value="TF">French Southern Territories</option>
                                                            <option value="GA">Gabon</option>
                                                            <option value="GM">Gambia</option>
                                                            <option value="GE">Georgia</option>
                                                            <option value="DE">Germany</option>
                                                            <option value="GH">Ghana</option>
                                                            <option value="GI">Gibraltar</option>
                                                            <option value="GR">Greece</option>
                                                            <option value="GL">Greenland</option>
                                                            <option value="GD">Grenada</option>
                                                            <option value="GP">Guadeloupe</option>
                                                            <option value="GU">Guam</option>
                                                            <option value="GT">Guatemala</option>
                                                            <option value="GG">Guernsey</option>
                                                            <option value="GN">Guinea</option>
                                                            <option value="GW">Guinea-Bissau</option>
                                                            <option value="GY">Guyana</option>
                                                            <option value="HT">Haiti</option>
                                                            <option value="HM">Heard Island and McDonald Islands</option>
                                                            <option value="HN">Honduras</option>
                                                            <option value="HK">Hong Kong</option>
                                                            <option value="HU">Hungary</option>
                                                            <option value="IS">Iceland</option>
                                                            <option value="IN">India</option>
                                                            <option value="ID">Indonesia</option>
                                                            <option value="IR">Iran</option>
                                                            <option value="IQ">Iraq</option>
                                                            <option value="IE">Ireland</option>
                                                            <option value="IM">Isle of Man</option>
                                                            <option value="IL">Israel</option>
                                                            <option value="IT">Italy</option>
                                                            <option value="CI">Ivory Coast</option>
                                                            <option value="JM">Jamaica</option>
                                                            <option value="JP">Japan</option>
                                                            <option value="JE">Jersey</option>
                                                            <option value="JO">Jordan</option>
                                                            <option value="KZ">Kazakhstan</option>
                                                            <option value="KE">Kenya</option>
                                                            <option value="KI">Kiribati</option>
                                                            <option value="KW">Kuwait</option>
                                                            <option value="KG">Kyrgyzstan</option>
                                                            <option value="LA">Laos</option>
                                                            <option value="LV">Latvia</option>
                                                            <option value="LB">Lebanon</option>
                                                            <option value="LS">Lesotho</option>
                                                            <option value="LR">Liberia</option>
                                                            <option value="LY">Libya</option>
                                                            <option value="LI">Liechtenstein</option>
                                                            <option value="LT">Lithuania</option>
                                                            <option value="LU">Luxembourg</option>
                                                            <option value="MO">Macao S.A.R., China</option>
                                                            <option value="MK">Macedonia</option>
                                                            <option value="MG">Madagascar</option>
                                                            <option value="MW">Malawi</option>
                                                            <option value="MY">Malaysia</option>
                                                            <option value="MV">Maldives</option>
                                                            <option value="ML">Mali</option>
                                                            <option value="MT">Malta</option>
                                                            <option value="MH">Marshall Islands</option>
                                                            <option value="MQ">Martinique</option>
                                                            <option value="MR">Mauritania</option>
                                                            <option value="MU">Mauritius</option>
                                                            <option value="YT">Mayotte</option>
                                                            <option value="MX">Mexico</option>
                                                            <option value="FM">Micronesia</option>
                                                            <option value="MD">Moldova</option>
                                                            <option value="MC">Monaco</option>
                                                            <option value="MN">Mongolia</option>
                                                            <option value="ME">Montenegro</option>
                                                            <option value="MS">Montserrat</option>
                                                            <option value="MA">Morocco</option>
                                                            <option value="MZ">Mozambique</option>
                                                            <option value="MM">Myanmar</option>
                                                            <option value="NA">Namibia</option>
                                                            <option value="NR">Nauru</option>
                                                            <option value="NP">Nepal</option>
                                                            <option value="NL">Netherlands</option>
                                                            <option value="NC">New Caledonia</option>
                                                            <option value="NZ">New Zealand</option>
                                                            <option value="NI">Nicaragua</option>
                                                            <option value="NE">Niger</option>
                                                            <option value="NG">Nigeria</option>
                                                            <option value="NU">Niue</option>
                                                            <option value="NF">Norfolk Island</option>
                                                            <option value="KP">North Korea</option>
                                                            <option value="MP">Northern Mariana Islands</option>
                                                            <option value="NO">Norway</option>
                                                            <option value="OM">Oman</option>
                                                            <option value="PK">Pakistan</option>
                                                            <option value="PS">Palestinian Territory</option>
                                                            <option value="PA">Panama</option>
                                                            <option value="PG">Papua New Guinea</option>
                                                            <option value="PY">Paraguay</option>
                                                            <option value="PE">Peru</option>
                                                            <option value="PH">Philippines</option>
                                                            <option value="PN">Pitcairn</option>
                                                            <option value="PL">Poland</option>
                                                            <option value="PT">Portugal</option>
                                                            <option value="PR">Puerto Rico</option>
                                                            <option value="QA">Qatar</option>
                                                            <option value="RE">Reunion</option>
                                                            <option value="RO">Romania</option>
                                                            <option value="RU">Russia</option>
                                                            <option value="RW">Rwanda</option>
                                                            <option value="ST">São Tomé and Príncipe</option>
                                                            <option value="BL">Saint Barthélemy</option>
                                                            <option value="SH">Saint Helena</option>
                                                            <option value="KN">Saint Kitts and Nevis</option>
                                                            <option value="LC">Saint Lucia</option>
                                                            <option value="SX">Saint Martin (Dutch part)</option>
                                                            <option value="MF">Saint Martin (French part)</option>
                                                            <option value="PM">Saint Pierre and Miquelon</option>
                                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                                            <option value="WS">Samoa</option>
                                                            <option value="SM">San Marino</option>
                                                            <option value="SA">Saudi Arabia</option>
                                                            <option value="SN">Senegal</option>
                                                            <option value="RS">Serbia</option>
                                                            <option value="SC">Seychelles</option>
                                                            <option value="SL">Sierra Leone</option>
                                                            <option value="SG">Singapore</option>
                                                            <option value="SK">Slovakia</option>
                                                            <option value="SI">Slovenia</option>
                                                            <option value="SB">Solomon Islands</option>
                                                            <option value="SO">Somalia</option>
                                                            <option value="ZA">South Africa</option>
                                                            <option value="GS">South Georgia/Sandwich Islands</option>
                                                            <option value="KR">South Korea</option>
                                                            <option value="SS">South Sudan</option>
                                                            <option value="ES">Spain</option>
                                                            <option value="LK">Sri Lanka</option>
                                                            <option value="SD">Sudan</option>
                                                            <option value="SR">Suriname</option>
                                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                                            <option value="SZ">Swaziland</option>
                                                            <option value="SE">Sweden</option>
                                                            <option value="CH">Switzerland</option>
                                                            <option value="SY">Syria</option>
                                                            <option value="TW">Taiwan</option>
                                                            <option value="TJ">Tajikistan</option>
                                                            <option value="TZ">Tanzania</option>
                                                            <option value="TH">Thailand</option>
                                                            <option value="TL">Timor-Leste</option>
                                                            <option value="TG">Togo</option>
                                                            <option value="TK">Tokelau</option>
                                                            <option value="TO">Tonga</option>
                                                            <option value="TT">Trinidad and Tobago</option>
                                                            <option value="TN">Tunisia</option>
                                                            <option value="TR">Turkey</option>
                                                            <option value="TM">Turkmenistan</option>
                                                            <option value="TC">Turks and Caicos Islands</option>
                                                            <option value="TV">Tuvalu</option>
                                                            <option value="UG">Uganda</option>
                                                            <option value="UA">Ukraine</option>
                                                            <option value="AE">United Arab Emirates</option>
                                                            <option value="GB">United Kingdom (UK)</option>
                                                            <option value="US">United States (US)</option>
                                                            <option value="UM">United States (US) Minor Outlying Islands</option>
                                                            <option value="VI">United States (US) Virgin Islands</option>
                                                            <option value="UY">Uruguay</option>
                                                            <option value="UZ">Uzbekistan</option>
                                                            <option value="VU">Vanuatu</option>
                                                            <option value="VA">Vatican</option>
                                                            <option value="VE">Venezuela</option>
                                                            <option value="VN">Vietnam</option>
                                                            <option value="WF">Wallis and Futuna</option>
                                                            <option value="EH">Western Sahara</option>
                                                            <option value="YE">Yemen</option>
                                                            <option value="ZM">Zambia</option>
                                                            <option value="ZW">Zimbabwe</option>
                                                        </select>
                                                        <span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}>
                                                            <span className="selection">
                                                                <span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabIndex="0" role="combobox">
                                                                    <span className="select2-selection__arrow" role="presentation">
                                                                        <b role="presentation"></b>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                        </span>
                                                        <noscript>
                                                            <button type="submit" name="woocommerce_checkout_update_totals" value="Update country">Update country</button>
                                                        </noscript>
                                                    </span>
                                                </p>
                                                <p className="form-row form-row-wide address-field validate-required" id="billing_address_1_field" data-priority="50">
                                                    <label htmlFor="billing_address_1" className="">Street address&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input className="input-text " name="billing_address_1" id="billing_address_1" placeholder="House number and street name" value="" autoComplete="address-line1" type="text" />
                                                    </span>
                                                </p>
                                                <p className="form-row form-row-wide address-field" id="billing_address_2_field" data-priority="60">
                                                    <span className="woocommerce-input-wrapper">
                                                        <input className="input-text " name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)" value="" autoComplete="address-line2" type="text" />
                                                    </span>
                                                </p>
                                                <p className="form-row form-row-wide address-field validate-required" id="billing_city_field" data-priority="70" data-o_className="form-row form-row-wide address-field validate-required">
                                                    <label htmlFor="billing_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <input className="input-text " name="billing_city" id="billing_city" placeholder="" value="" autoComplete="address-level2" type="text" />
                                                    </span>
                                                </p>
                                                <p className="form-row form-row-wide address-field validate-required validate-state woocommerce-validated" id="billing_state_field" data-priority="80" data-o_className="form-row form-row-wide address-field validate-required validate-state woocommerce-validated">
                                                    <label htmlFor="billing_state" className="">District&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                    <span className="woocommerce-input-wrapper">
                                                        <select name="billing_state" id="billing_state" className="state_select select2-hidden-accessible" autoComplete="address-level1" data-placeholder="" tabIndex="-1" aria-hidden="true">
                                                            <option value="">Select an option…</option>
                                                            <option value="BD-05">Bagerhat</option>
                                                            <option value="BD-01">Bandarban</option>
                                                            <option value="BD-02">Barguna</option>
                                                            <option value="BD-06">Barishal</option>
                                                            <option value="BD-07">Bhola</option>
                                                            <option value="BD-03">Bogura</option>
                                                            <option value="BD-04">Brahmanbaria</option>
                                                            <option value="BD-09">Chandpur</option>
                                                            <option value="BD-10">Chattogram</option>
                                                            <option value="BD-12">Chuadanga</option>
                                                            <option value="BD-11">Cox's Bazar</option>
                                                            <option value="BD-08">Cumilla</option>
                                                            <option value="BD-13">Dhaka</option>
                                                            <option value="BD-14">Dinajpur</option>
                                                            <option value="BD-15">Faridpur </option>
                                                            <option value="BD-16">Feni</option>
                                                            <option value="BD-19">Gaibandha</option>
                                                            <option value="BD-18">Gazipur</option>
                                                            <option value="BD-17">Gopalganj</option>
                                                            <option value="BD-20">Habiganj</option>
                                                            <option value="BD-21">Jamalpur</option>
                                                            <option value="BD-22">Jashore</option>
                                                            <option value="BD-25">Jhalokati</option>
                                                            <option value="BD-23">Jhenaidah</option>
                                                            <option value="BD-24">Joypurhat</option>
                                                            <option value="BD-29">Khagrachhari</option>
                                                            <option value="BD-27">Khulna</option>
                                                            <option value="BD-26">Kishoreganj</option>
                                                            <option value="BD-28">Kurigram</option>
                                                            <option value="BD-30">Kushtia</option>
                                                            <option value="BD-31">Lakshmipur</option>
                                                            <option value="BD-32">Lalmonirhat</option>
                                                            <option value="BD-36">Madaripur</option>
                                                            <option value="BD-37">Magura</option>
                                                            <option value="BD-33">Manikganj </option>
                                                            <option value="BD-39">Meherpur</option>
                                                            <option value="BD-38">Moulvibazar</option>
                                                            <option value="BD-35">Munshiganj</option>
                                                            <option value="BD-34">Mymensingh</option>
                                                            <option value="BD-48">Naogaon</option>
                                                            <option value="BD-43">Narail</option>
                                                            <option value="BD-40">Narayanganj</option>
                                                            <option value="BD-42">Narsingdi</option>
                                                            <option value="BD-44">Natore</option>
                                                            <option value="BD-45">Nawabganj</option>
                                                            <option value="BD-41">Netrakona</option>
                                                            <option value="BD-46">Nilphamari</option>
                                                            <option value="BD-47">Noakhali</option>
                                                            <option value="BD-49">Pabna</option>
                                                            <option value="BD-52">Panchagarh</option>
                                                            <option value="BD-51">Patuakhali</option>
                                                            <option value="BD-50">Pirojpur</option>
                                                            <option value="BD-53">Rajbari</option>
                                                            <option value="BD-54">Rajshahi</option>
                                                            <option value="BD-56">Rangamati</option>
                                                            <option value="BD-55">Rangpur</option>
                                                            <option value="BD-58">Satkhira</option>
                                                            <option value="BD-62">Shariatpur</option>
                                                            <option value="BD-57">Sherpur</option>
                                                            <option value="BD-59">Sirajganj</option>
                                                            <option value="BD-61">Sunamganj</option>
                                                            <option value="BD-60">Sylhet</option>
                                                            <option value="BD-63">Tangail</option>
                                                            <option value="BD-64">Thakurgaon</option>
                                                        </select>
                                                        <span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}>
                                                            <span className="selection">
                                                                <span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabIndex="0"  role="combobox">
                                                                    <span className="select2-selection__arrow" role="presentation">
                                                                        <b role="presentation"></b>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                        </span>
                                                    </span>
                                                </p>
                                                <p className="form-row form-row-wide address-field validate-postcode" id="billing_postcode_field" data-priority="90" data-o_className="form-row form-row-wide address-field validate-postcode">
                                                    <label htmlFor="billing_postcode" className="">Postcode / ZIP&nbsp;<span className="optional">(optional)</span></label>
                                                    <span className="woocommerce-input-wrapper"><input className="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="" autoComplete="postal-code" type="text" /></span>
                                                </p>
                                                <p className="form-row form-row-wide validate-phone" id="billing_phone_field" data-priority="100">
                                                    <label htmlFor="billing_phone" className="">Phone&nbsp;<span className="optional">(optional)</span></label>
                                                    <span className="woocommerce-input-wrapper"><input className="input-text " name="billing_phone" id="billing_phone" placeholder="" value="" autoComplete="tel" type="tel" /></span></p>
                                                    <p className="form-row form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110">
                                                        <label htmlFor="billing_email" className="">Email address&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper"><input className="input-text " name="billing_email" id="billing_email" placeholder="" value="" type="email" /></span>
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="woocommerce-shipping-fields">
                                            <h3 id="ship-to-different-address">
                                                <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                                    <input id="ship-to-different-address-checkbox" className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" name="ship_to_different_address" value="1" type="checkbox" />
                                                    <span>Ship to a different address?</span>
                                                </label>
                                            </h3>
                                            <div className="shipping_address" style={{display: 'none'}}>
                                                <div className="woocommerce-shipping-fields__field-wrapper">
                                                    <p className="form-row form-row-first validate-required" id="shipping_first_name_field" data-priority="10">
                                                        <label htmlFor="shipping_first_name" className="">First name&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper"><input className="input-text " name="shipping_first_name" id="shipping_first_name" placeholder="" value="" autoComplete="given-name" type="text" /></span>
                                                    </p>
                                                    <p className="form-row form-row-last validate-required" id="shipping_last_name_field" data-priority="20">
                                                        <label htmlFor="shipping_last_name" className="">Last name&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper"><input className="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" value="" autoComplete="family-name" type="text" /></span>
                                                    </p>
                                                    <p className="form-row form-row-wide" id="shipping_company_field" data-priority="30">
                                                        <label htmlFor="shipping_company" className="">Company name&nbsp;<span className="optional">(optional)</span></label>
                                                        <span className="woocommerce-input-wrapper"><input className="input-text " name="shipping_company" id="shipping_company" placeholder="" value="" autoComplete="organization" type="text" /></span>
                                                    </p>
                                                    <p className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated" id="shipping_country_field" data-priority="40">
                                                        <label htmlFor="shipping_country" className="">Country&nbsp;<abbr className="required" title="required">*</abbr></label>
                                                        <span className="woocommerce-input-wrapper">
                                                            <select name="shipping_country" id="shipping_country" className="country_to_state country_select  select2-hidden-accessible" autoComplete="country" tabIndex="-1" aria-hidden="true">
                                                                <option value="">Select a country…</option>
                                                                <option value="AX">Åland Islands</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AD">Andorra</option>
                                                                <option value="AO">Angola</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AQ">Antarctica</option>
                                                                <option value="AG">Antigua and Barbuda</option>
                                                                <option value="AR">Argentina</option>
                                                                <option value="AM">Armenia</option>
                                                                <option value="AW">Aruba</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="AZ">Azerbaijan</option>
                                                                <option value="BS">Bahamas</option>
                                                                <option value="BH">Bahrain</option>
                                                                <option value="BD">Bangladesh</option>
                                                                <option value="BB">Barbados</option>
                                                                <option value="BY">Belarus</option>
                                                                <option value="PW">Belau</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option>
                                                                <option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option>
                                                                <option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option>
                                                                <option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option>
                                                                <option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option>
                                                                <option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao S.A.R., China</option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option>
                                                                <option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option>
                                                                <option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option>
                                                                <option value="US">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="VI">United States (US) Virgin Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabIndex="0" role="combobox"><span className="select2-selection__rendered" id="select2-shipping_country-container" role="textbox" aria-readonly="true" title="Bangladesh">Bangladesh</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span>
                                                    </span>
                                                            <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                        </span>
                                                    <noscript>
                                                        <button type="submit" name="woocommerce_checkout_update_totals" value="Update country">Update country</button>
                                                    </noscript>
                                                    </span>
                                                    </p>
                                                    <p className="form-row form-row-wide address-field validate-required" id="shipping_address_1_field" data-priority="50">
                                                        <label htmlFor="shipping_address_1" className="">Street address&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input className="input-text " name="shipping_address_1" id="shipping_address_1" placeholder="House number and street name" value="" autoComplete="address-line1" type="text" /></span></p>
                                                            <p className="form-row form-row-wide address-field" id="shipping_address_2_field" data-priority="60"><span className="woocommerce-input-wrapper"><input className="input-text " name="shipping_address_2" id="shipping_address_2" placeholder="Apartment, suite, unit etc. (optional)" value="" autoComplete="address-line2" type="text" /></span></p>
                                                                <p className="form-row form-row-wide address-field validate-required" id="shipping_city_field" data-priority="70" data-o_className="form-row form-row-wide address-field validate-required">
                                                                    <label htmlFor="shipping_city" className="">Town / City&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input className="input-text " name="shipping_city" id="shipping_city" placeholder="" value="" autoComplete="address-level2" type="text" /></span></p>
                                                                    <p className="form-row form-row-wide address-field validate-required validate-state woocommerce-validated" id="shipping_state_field" data-priority="80" data-o_className="form-row form-row-wide address-field validate-required validate-state woocommerce-validated">
                                                                        <label htmlFor="shipping_state" className="">District&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><select name="shipping_state" id="shipping_state" className="state_select  select2-hidden-accessible" autoComplete="address-level1" data-placeholder="" tabIndex="-1" aria-hidden="true"><option value="">Select an option…</option><option value="BD-05">Bagerhat</option><option value="BD-01">Bandarban</option><option value="BD-02">Barguna</option><option value="BD-06">Barishal</option><option value="BD-07">Bhola</option><option value="BD-03">Bogura</option><option value="BD-04">Brahmanbaria</option><option value="BD-09">Chandpur</option><option value="BD-10">Chattogram</option><option value="BD-12">Chuadanga</option><option value="BD-11">Cox's Bazar</option><option value="BD-08">Cumilla</option><option value="BD-13">Dhaka</option><option value="BD-14">Dinajpur</option><option value="BD-15">Faridpur </option><option value="BD-16">Feni</option><option value="BD-19">Gaibandha</option><option value="BD-18">Gazipur</option><option value="BD-17">Gopalganj</option><option value="BD-20">Habiganj</option><option value="BD-21">Jamalpur</option><option value="BD-22">Jashore</option><option value="BD-25">Jhalokati</option><option value="BD-23">Jhenaidah</option><option value="BD-24">Joypurhat</option><option value="BD-29">Khagrachhari</option><option value="BD-27">Khulna</option><option value="BD-26">Kishoreganj</option><option value="BD-28">Kurigram</option><option value="BD-30">Kushtia</option><option value="BD-31">Lakshmipur</option><option value="BD-32">Lalmonirhat</option><option value="BD-36">Madaripur</option><option value="BD-37">Magura</option><option value="BD-33">Manikganj </option><option value="BD-39">Meherpur</option><option value="BD-38">Moulvibazar</option><option value="BD-35">Munshiganj</option><option value="BD-34">Mymensingh</option><option value="BD-48">Naogaon</option><option value="BD-43">Narail</option><option value="BD-40">Narayanganj</option><option value="BD-42">Narsingdi</option><option value="BD-44">Natore</option><option value="BD-45">Nawabganj</option><option value="BD-41">Netrakona</option><option value="BD-46">Nilphamari</option><option value="BD-47">Noakhali</option><option value="BD-49">Pabna</option><option value="BD-52">Panchagarh</option><option value="BD-51">Patuakhali</option><option value="BD-50">Pirojpur</option><option value="BD-53">Rajbari</option><option value="BD-54">Rajshahi</option><option value="BD-56">Rangamati</option><option value="BD-55">Rangpur</option><option value="BD-58">Satkhira</option><option value="BD-62">Shariatpur</option><option value="BD-57">Sherpur</option><option value="BD-59">Sirajganj</option><option value="BD-61">Sunamganj</option><option value="BD-60">Sylhet</option><option value="BD-63">Tangail</option><option value="BD-64">Thakurgaon</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" aria-haspopup="true" aria-expanded="false" tabIndex="0"  role="combobox"><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span>
    </span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
    </span></p>
                                                                    <p className="form-row form-row-wide address-field validate-postcode" id="shipping_postcode_field" data-priority="90" data-o_className="form-row form-row-wide address-field validate-postcode">
                                                                        <label htmlFor="shipping_postcode" className="">Postcode / ZIP&nbsp;<span className="optional">(optional)</span></label><span className="woocommerce-input-wrapper">
                                                                        <input className="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" value="" autoComplete="postal-code" type="text" />
                                                                    </span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        <div className="woocommerce-additional-fields">
                                                            <div className="woocommerce-additional-fields__field-wrapper">
                                                                <p className="form-row notes" id="order_comments_field" data-priority="">
                                                                    <label htmlFor="order_comments" className="">Order notes&nbsp;<span className="optional">(optional)</span></label><span className="woocommerce-input-wrapper"><textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea></span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 id="order_review_heading">Your order</h3>
                                                <div id="order_review" className="woocommerce-checkout-review-order">
                                                    <table className="shop_table woocommerce-checkout-review-order-table" style={{position: 'relative'}}>
                                                        <thead>
                                                        <tr>
                                                            <th className="product-name">Product</th>
                                                            <th className="product-total">Total</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr className="cart_item">
                                                            <td className="product-name">
                                                                Product Name&nbsp; <strong className="product-quantity">× 4</strong> </td>
                                                            <td className="product-total">
                                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>180.00</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="cart_item">
                                                            <td className="product-name">
                                                                New Product&nbsp; <strong className="product-quantity">× 2</strong> </td>
                                                            <td className="product-total">
                                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>220.00</span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                        <tfoot>
                                                        <tr className="cart-subtotal">
                                                            <th>Subtotal</th>
                                                            <td><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>400.00</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="shipping">
                                                            <th>Shipping</th>
                                                            <td data-title="Shipping">
                                                                Flat rate: <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>20.00</span>
                                                                <input name="shipping_method[0]" data-index="0" id="shipping_method_0" value="flat_rate:1" className="shipping_method" type="hidden" />
                                                                </td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <th>Total</th>
                                                                <td><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>420.00</span></strong> </td>
                                                            </tr>
                                                        </tfoot>
                                                        </table>
                                                        <div id="payment" className="woocommerce-checkout-payment">
                                                            <div className="form-row place-order">
                                                                <noscript>
                                                                    Since your browser does not support JavaScript, or it is disabled, please ensure you click the &lt;em&gt;Update Totals&lt;/em&gt; button before placing your order. You may be charged more than the amount stated above if you fail to do so.
                                                                    <br/>
                                                                    <button type="submit" className="button alt" name="woocommerce_checkout_update_totals" value="Update totals">Update totals</button>
                                                                </noscript>
                                                                <div className="woocommerce-terms-and-conditions-wrapper">
                                                                    <div className="woocommerce-privacy-policy-text"></div>
                                                                </div>
                                                                <button type="submit" className="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order">Continue to payment</button>
                                                                <input id="woocommerce-process-checkout-nonce" name="woocommerce-process-checkout-nonce" value="698c117a02" type="hidden" />
                                                                <input name="_wp_http_referer" value="#checkout" type="hidden" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
    );
}

export function Checkout() {
    return (
        <div>
            <Header activeTitle="home"/>
            <BreadCrumb title="CHECKOUT" currentItem="Checkout" />
            <Shop />
            <Footer />
        </div>
    );
}
