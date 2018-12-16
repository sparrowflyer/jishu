import React from 'react';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';

function FAQContent() {
    return (
        <section className="faq">
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="content-1" role="tabpanel" aria-labelledby="nav-1">
                                    <div className="accordion" id="data-1">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#data-1">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#data-1">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#data-1">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#data-1">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFive">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#data-1">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingSix">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#data-1">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="content-2" role="tabpanel" aria-labelledby="nav-2">
                                    <div className="accordion" id="data-2">
                                        <div className="card">
                                            <div className="card-header" id="headingSeven">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseSeven" className="collapse show" aria-labelledby="headingSeven" data-parent="#data-2">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingEight">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#data-2">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingNine">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#data-2">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingTen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#data-2">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="content-3" role="tabpanel" aria-labelledby="nav-3">
                                    <div className="accordion" id="data-3">
                                        <div className="card">
                                            <div className="card-header" id="headingEleven">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="true" aria-controls="collapseEleven">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseEleven" className="collapse show" aria-labelledby="headingEleven" data-parent="#data-3">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwelve">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#data-3">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThirteen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThirteen" className="collapse" aria-labelledby="headingThirteen" data-parent="#data-3">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingFourteen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen" data-parent="#data-3">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingFifteen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseFifteen" className="collapse" aria-labelledby="headingFifteen" data-parent="#data-3">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingSixteen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseSixteen" className="collapse" aria-labelledby="headingSixteen" data-parent="#data-3">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="content-4" role="tabpanel" aria-labelledby="nav-4">
                                    <div className="accordion" id="data-4">
                                        <div className="card">
                                            <div className="card-header" id="headingSeventeen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseSeventeen" aria-expanded="true" aria-controls="collapseSeventeen">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseSeventeen" className="collapse show" aria-labelledby="headingSeventeen" data-parent="#data-4">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingEighteen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseEighteen" className="collapse" aria-labelledby="headingEighteen" data-parent="#data-4">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingNineteen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseNineteen" className="collapse" aria-labelledby="headingNineteen" data-parent="#data-4">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingTwenty">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwenty" className="collapse" aria-labelledby="headingTwenty" data-parent="#data-4">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="content-5" role="tabpanel" aria-labelledby="nav-5">
                                    <div className="accordion" id="data-5">
                                        <div className="card">
                                            <div className="card-header" id="headingTwentyone">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwentyone" aria-expanded="true" aria-controls="collapseTwentyone">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseTwentyone" className="collapse show" aria-labelledby="headingTwentyone" data-parent="#data-5">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwentytwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwentytwo" aria-expanded="false" aria-controls="collapseTwentytwo">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwentytwo" className="collapse" aria-labelledby="headingTwentytwo" data-parent="#data-5">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="heading23">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapse23" className="collapse" aria-labelledby="heading23" data-parent="#data-5">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="heading24">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapse24" className="collapse" aria-labelledby="heading24" data-parent="#data-5">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="heading25">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse25" aria-expanded="false" aria-controls="collapse25">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapse25" className="collapse" aria-labelledby="heading25" data-parent="#data-5">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="heading26">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse26" aria-expanded="false" aria-controls="collapse26">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapse26" className="collapse" aria-labelledby="heading26" data-parent="#data-5">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="content-6" role="tabpanel" aria-labelledby="nav-6">
                                    <div className="accordion" id="data-6">
                                        <div className="card">
                                            <div className="card-header" id="heading27">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse27" aria-expanded="true" aria-controls="collapse27">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapse27" className="collapse show" aria-labelledby="heading27" data-parent="#data-6">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="heading28">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse28" aria-expanded="false" aria-controls="collapse28">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapse28" className="collapse" aria-labelledby="heading28" data-parent="#data-6">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="heading29">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse29" aria-expanded="false" aria-controls="collapse29">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapse29" className="collapse" aria-labelledby="heading29" data-parent="#data-6">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="heading30">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse30" aria-expanded="false" aria-controls="collapse30">
                                                        Duis blandit aliquam leo sed blandit sem gravida non?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapse30" className="collapse" aria-labelledby="heading30" data-parent="#data-6">
                                                <div className="card-body">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <aside className="sidebar">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-1" data-toggle="tab" href="#content-1" role="tab" aria-controls="content-1" aria-selected="true">General Questions</a>
                                    <a className="nav-item nav-link" id="nav-2" data-toggle="tab" href="#content-2" role="tab" aria-controls="content-2" aria-selected="false">Payment Method</a>
                                    <a className="nav-item nav-link" id="nav-3" data-toggle="tab" href="#content-3" role="tab" aria-controls="content-3" aria-selected="false">Your Account</a>
                                    <a className="nav-item nav-link" id="nav-4" data-toggle="tab" href="#content-4" role="tab" aria-controls="content-4" aria-selected="false">System Solutionns</a>
                                    <a className="nav-item nav-link" id="nav-5" data-toggle="tab" href="#content-5" role="tab" aria-controls="content-5" aria-selected="false">Copyrights & Trademark</a>
                                    <a className="nav-item nav-link" id="nav-6" data-toggle="tab" href="#content-6" role="tab" aria-controls="content-6" aria-selected="false">Technical Support</a>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function FAQ() {
    return (
        <div>
            <Header activeTitle="other" />
            <BreadCrumb hasSearchBox="true" />
            <FAQContent />
            <Footer />
        </div>
    );
}
