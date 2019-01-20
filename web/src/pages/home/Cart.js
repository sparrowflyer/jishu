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
                            <form className="woocommerce-cart-form" action="#" method="post">
                                <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" >
                                    <thead>
                                    <tr>
                                        <th className="product-remove">&nbsp;</th>
                                        <th className="product-thumbnail">&nbsp;</th>
                                        <th className="product-name">Product</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="woocommerce-cart-form__cart-item cart_item">
                                        <td className="product-remove">
                                            <a href="#?remove_item=aab3238922bcc25a6f606eb525ffdc56&amp;_wpnonce=9737b4789f" className="remove" aria-label="Remove this item" data-product_id="14" data-product_sku="">×</a>
                                        </td>
                                        <td className="product-thumbnail">
                                            <a href="#"><img src="/images/shop/3.jpg" alt="Placeholder" className="woocommerce-placeholder wp-post-image" width="324" height="324" /></a>
                                        </td>
                                        <td className="product-name" data-title="Product">
                                            <a href="#">Product Name</a>
                                        </td>
                                        <td className="product-price" data-title="Price">
                                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>45.00</span>
                                        </td>
                                        <td className="product-quantity" data-title="Quantity">
                                            <div className="quantity">
                                                <label className="screen-reader-text" htmlFor="quantity_5b4087b090911">Quantity</label>
                                                <input id="quantity_5b4087b090911" className="input-text qty text" step="1" min="0" max="20" name="cart[aab3238922bcc25a6f606eb525ffdc56][qty]" value="1" title="Qty" size="4"  type="number" />
                                            </div>
                                        </td>
                                        <td className="product-subtotal" data-title="Total">
                                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>45.00</span>
                                        </td>
                                    </tr>
                                    <tr className="woocommerce-cart-form__cart-item cart_item">
                                        <td className="product-remove">
                                            <a href="#?remove_item=aab3238922bcc25a6f606eb525ffdc56&amp;_wpnonce=9737b478lo" className="remove" aria-label="Remove this item" data-product_id="15" data-product_sku="">×</a>
                                        </td>
                                        <td className="product-thumbnail">
                                            <a href="#"><img src="/images/shop/5.jpg" alt="Placeholder" className="woocommerce-placeholder wp-post-image" width="324" height="324" /></a>
                                        </td>
                                        <td className="product-name" data-title="Product">
                                            <a href="#">Product Name</a>
                                        </td>
                                        <td className="product-price" data-title="Price">
                                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>110.00</span>
                                        </td>
                                        <td className="product-quantity" data-title="Quantity">
                                            <div className="quantity">
                                                <label className="screen-reader-text" htmlFor="quantity_5b4087b091185">Quantity</label>
                                                <input id="quantity_5b4087b091185" className="input-text qty text" step="1" min="0" max="20" name="cart[9bf31c7ff062936a96d3c8bd1f8f2ff3][qty]" value="2" title="Qty" size="4" type="number" />
                                            </div>
                                        </td>
                                        <td className="product-subtotal" data-title="Total">
                                            <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>220.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="6" className="actions">
                                            <div className="coupon">
                                                <label htmlFor="coupon_code">Coupon:</label>
                                                <input name="coupon_code" className="input-text" id="coupon_code" value="" placeholder="Coupon code" type="text" />
                                                <button type="submit" className="button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                            </div>
                                            <button type="submit" className="button" name="update_cart" value="Update cart" disabled="">Update cart</button>
                                            <input id="woocommerce-cart-nonce" name="woocommerce-cart-nonce" value="9737b4789f" type="hidden" />
                                            <input name="_wp_http_referer" value="#cart" type="hidden" />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </form>
                            <div className="cart-collaterals">
                                <div className="cart_totals ">
                                    <h2>Cart totals</h2>
                                    <table className="shop_table shop_table_responsive" >
                                        <tbody>
                                        <tr className="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td data-title="Subtotal">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>265.00</span>
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
                                            <td data-title="Total"><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$&nbsp;</span>285.00</span></strong> </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="wc-proceed-to-checkout">
                                        <a href="checkout.html" className="checkout-button button alt wc-forward">Proceed to checkout</a>
                                        <div className="wcppec-checkout-buttons woo_pp_cart_buttons_div"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Cart() {
    return (
        <div>
            <Header activeTitle="home"/>
            <BreadCrumb title="CART" currentItem="Cart" />
            <Shop />
            <Footer />
        </div>
    );
}
