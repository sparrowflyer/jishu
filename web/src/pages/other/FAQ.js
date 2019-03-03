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
                                                        总则
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#data-1">
                                                <div className="card-body">
                                                    用户在接受叽叔网（www.unclejee.cn）服务之前，请务必仔细阅读本条款并同意本声明。<br/>
                                                    用户直接或通过各类方式（如站外API引用等）间接使用叽叔网服务和数据的行为，都将被视作已无条件接受本声明所涉全部内容；<br/>
                                                    若用户对本声明的任何条款有异议，请停止使用叽叔网所提供的全部服务。
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        第一条
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#data-1">
                                                <div className="card-body">
                                                    用户以各种方式使用叽叔网服务和数据（包括但不限于发表、宣传介绍、转载、浏览及利用叽叔网或叽叔网用户发布内容）的过程中，不得以任何方式利用叽叔网直接或间接从事违反中国法律法规，以及社会公德的行为。用户应当恪守下述承诺：<br/>
                                                    1.	发布、转载或提供的内容符合中国法律法规、社会公德；<br/>
                                                    2.	不得干扰、损害和侵犯叽叔网的各种合法权利与利益；<br/>
                                                    3.	不得干扰、损害和侵犯其他叽叔网用户的各种合法权利与利益；<br/>
                                                    4.	遵守叽叔网以及与之相关的网络服务的协议、指导原则、管理细则等；<br/>
                                                    5.	尊重叽叔用户及其所贡献内容；<br/>
                                                    6.	不得发布垃圾广告信息：用户以推广曝光为目的，发布影响用户体验、扰乱知乎社区秩序的内容，或进行相关行为；<br/>
                                                    7.	不得滥用产品功能，进行影响用户体验，危及平台安全及损害他人权益的行为；<br/>
                                                    8.	不得发布不实信息、封建迷信信息、色情低俗信息、标题夸大信息等。<br/>
                                                    叽叔网有权对违反上述承诺的内容予以删除。<br/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        第二条
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#data-1">
                                                <div className="card-body">
                                                    1.  叽叔网仅为用户发布的内容提供存储空间，叽叔网不对用户发表、转载的内容提供任何形式的保证：不保证内容满足您的要求，不保证叽叔网的服务不会中断。因网络状况、通讯线路、第三方网站或管理部门的要求等任何原因而导致您不能正常使用果壳，叽叔网不承担任何法律责任。<br/>
                                                    2.  用户在叽叔网发表的内容（包含但不限于叽叔网目前各产品功能里的内容）仅表明其个人的立场和观点，并不代表叽叔网的立场或观点。作为内容的发表者，需自行对所发表内容负责，因所发表内容引发的一切纠纷，由该内容的发表者承担全部法律及连带责任。叽叔网不承担任何法律及连带责任。<br/>
                                                    3.  用户在叽叔网发布涉嫌侵犯他人知识产权或其他合法权益的内容，经相关方提供初步证据，叽叔网有权先行予以删除，并保留移交司法机关查处的权利。参照相应司法机关的查处结果，叽叔网对于网站发布内容的处置具有最终决定权。<br/>
                                                    4.  个人或单位如认为叽叔网上存在侵犯自身合法权益的内容，应准备好具有法律效应的证明材料，及时与叽叔网取得联系，以便叽叔网迅速做出处理。<br/>
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
                                                        声明与承诺
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseSeven" className="collapse show" aria-labelledby="headingSeven" data-parent="#data-2">
                                                <div className="card-body">
                                                    （一）请您确认，在您注册成为叽叔用户以接受本服务前，您已充分阅读、理解并接受本协议的全部内容，一旦您使用本服务，即表示您同意遵循本协议之所有约定。<br />
                                                    （二）您同意，本公司有权随时对本协议内容进行单方面的变更，并以在本网站公告的方式予以公布，无需另行单独通知您；若您在本协议内容公告变更后继续使用本服务的，表示您已充分阅读、理解并接受修改后的协议内容，也将遵循修改后的协议内容使用本服务；若您不同意修改后的协议内容，您应停止使用本服务。<br />
                                                    您保证，在您同意接受本协议并注册成为叽叔用户时，您已经年满16周岁，或者您是在中国大陆地区合法开展经营活动或其他业务的法人或其他组织；本协议内容不受您所属国家或地区法律的排斥。不具备前述条件的，您应立即终止注册或停止使用本服务。您在使用叽叔服务时，应自行判断对方是否是完全民事行为能力人，且确定他提供的信息和他本人对应，并自行决定是否与对方进行签约交易等，且您应自行承担与此相关的所有风险。本网站不承担因对方身份确认失误而造成的损失。<br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingEight">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                        定义及解释
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#data-2">
                                                <div className="card-body">
                                                    （一）叽叔账户（或“该账户”）：是本网站向您提供的唯一编号。您可自行为该叽叔账户设置密码，并用以查询或发起代表你个人或者组织的咨询过程。您需使用本人电子邮箱或手机号码，或者本公司允许的其它方式，例如通过扫描二维码、识别生物特征的方式，作为登录手段登录叽叔账户。
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingNine">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                        叽叔服务
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#data-2">
                                                <div className="card-body">
                                                    （一）叽叔服务（以下简称为本服务）：指本条所列的服务，及您实际使用的本公司或本公司接受您的委托为您提供的服务。<br />
                                                    （二）叽叔服务包括（但不限于）以下服务：<br />
                                                    1、知识付费服务 通过“叽叔”网站，本公司向注册用户提供在该网站上的知识付费等服务。用户通过叽叔的服务，在彼此之间达成独立的服务协议，并承担相应的权利和义务。如在过程中导致用户遭受相关财产及人身损害的，用户应直接向另一方追责，叽叔免于承担因服务双方之间服务协议履行所致任何纠纷的赔偿责任。同时，叽叔建立了完善的客户服务体系，力争帮助或促使用户之间妥善解决纠纷。<br />
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
                                                        注册相关
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseEleven" className="collapse show" aria-labelledby="headingEleven" data-parent="#data-3">
                                                <div className="card-body">
                                                    除本协议另有规定或相关产品另有规则外，您须在本网站及/或无线客户端注册并取得本公司提供给您的叽叔账户，并且按照本公司要求提供相关信息完成激活后方可使用本服务。您同意：<br />
                                                    1、按照本公司要求准确提供并在取得该账户后及时更新您正确、最新及完整的身份信息及相关资料。若本公司有合理理由怀疑您提供的身份信息及相关资料错误、不实、过时或不完整的，本公司有权暂停或终止向您提供部分或全部叽叔服务。本公司对此不承担任何责任，您将承担因此产生的任何直接或间接支出。若因国家法律法规、部门规章或监管机构的要求，本公司需要您补充提供任何相关资料时，如您不能及时配合提供，本公司有权暂停或终止向您提供部分或全部叽叔服务。<br />
                                                    2、您应当准确提供并及时更新您提供的电子邮件地址、联系电话、联系地址、邮政编码等联系方式，以便本公司与您进行及时、有效联系。您应完全独自承担因通过这些联系方式无法与您取得联系而导致的您在使用本服务过程中遭受的任何损失或增加任何费用等不利后果。您理解并同意，您有义务保持您提供的联系方式的有效性，如有变更需要更新的，您应按本公司的要求进行操作。<br />
                                                    3、您应及时更新资料（包括但不限于身份证、户口本、护照等证件或其他身份证明文件、联系方式、作为叽叔登录名的邮箱或手机号码、与叽叔账户绑定的邮箱、手机号码等），否则叽叔有权将叽叔登录名、叽叔账户绑定的邮箱、手机号码开放给其他用户注册或使用。因您未及时更新资料导致的一切后果，均应由您自行承担，该后果包括但不限于导致本服务无法提供或提供时发生任何错误、账户及账户内信息被别人盗用，且您不得将此作为取消交易、拒绝执行协议的理由。<br />
                                                    4、您确认，只有您本人可以使用您的叽叔账户。在您决定不再使用该账户时，您应按照本条（四）的规定向本公司申请注销该账户。 您同意，若您丧失全部或部分民事权利能力或民事行为能力，本公司有权根据有效法律文书（包括但不限于生效的法院判决、生效的遗嘱等）或本公司认可的其他资料处置您叽叔账户内的资料。<br />
                                                    5、若您为个人用户，您确认，本公司有权在必要时要求核对您的有效身份证件或其他必要文件，并留存有效身份证件的彩色扫描件，您应积极配合，否则本公司有权限制或停止向您提供部分或全部叽叔服务：<br />
                                                    A、您要求变更身份信息或您身份信息已过有效期的；<br />
                                                    B、本公司认为您的交易行为或交易情况出现异常的；<br />
                                                    C、本公司认为您的身份资料存在疑点或本公司在向您提供服务的过程中认为您已经提供的身份资料存在疑点的；<br />
                                                    D、本公司认为应核对或留存您身份证件或其他必要文件的其他情形的。<br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwelve">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                                        账户安全
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#data-3">
                                                <div className="card-body">
                                                    您将对使用该账户或密码进行的一切操作及言论负完全的责任，您同意：<br />
                                                    1、除相关产品另有规则外，本公司可以通过您的叽叔登录名和密码或扫描二维码或识别您的生物特征或者本公司认可的其他方式识别您的身份，您应当对该密码、身份信息等进行妥善保管，对于因密码、身份信息、校验码等泄露所致的损失由您自行承担。您保证不向其他任何人泄露您的叽叔登录名及密码、校验码以及身份信息等，亦不使用其他任何人的叽叔登录名及密码。本公司亦可能通过本服务应用您使用的其他产品或设备识别您的指示，您应当妥善保管处于您或应当处于您掌控下的这些产品或设备，对于这些产品或设备遗失所致的任何损失，由您自行承担。<br />
                                                    2、基于计算机端、手机端以及使用其他电子设备的用户使用习惯，我们可能在您使用具体产品时设置不同的账户登录模式及采取不同的措施识别您的身份。<br />
                                                    3、您同意，（a）如您发现有他人冒用或盗用您的叽叔登录名及密码或任何其他未经合法授权之情形，或发生与叽叔账户关联的手机或其他设备遗失或其他可能危及到叽叔账户资金安全情形时，应立即以有效方式通知本公司，向本公司申请暂停相关服务，以保障您的合法权益；及（b）确保您在持续登录叽叔网站时段结束时，以正确步骤离开网站。本公司不能也不会对因您未能遵守本款约定而发生的任何损失、损毁及其他不利后果负责。您理解本公司对您的请求采取行动需要合理期限，在此之前，本公司对已执行的指令及（或）所导致的您的损失不承担任何责任。<br />
                                                    4、除非您本人书面提出申请或者另有法律规定或经司法裁判，且征得本公司同意，否则您的叽叔登录名及密码、叽叔账户不得以任何方式转让、赠与或继承（相关的财产权益除外）。<br />
                                                    5、您使用本服务时同意并认可，可能系统问题造成本服务无法提供，对此本公司不承担任何责任。<br />
                                                    6、您同意，基于运行和交易安全的需要，本公司可以暂时停止提供或者限制本服务部分功能，或提供新的功能，在任何功能减少、增加或者变化时，只要您仍然使用本服务，表示您仍然同意本协议或者变更后的协议。<br />
                                                    7、本公司有权了解您使用本公司产品或服务的真实交易背景及目的，您应如实提供本公司所需的真实、全面、准确的信息；如果本公司有合理理由怀疑您提供虚假交易信息的，本公司有权暂时或永久限制您所使用的产品或服务的部分或全部功能，并通过邮件或者站内信或客户端通知等方式通知您，您应及时予以关注。<br />
                                                    8、您同意，本公司有权按照包括但不限于公安机关、检察机关、法院、海关、税务机关等司法机关、行政机关、军事机关的要求对您的个人信息及在叽叔的交易及账户等进行查询、冻结或其他操作。<br />
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
                                                        注册及账户
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseSeventeen" className="collapse show" aria-labelledby="headingSeventeen" data-parent="#data-4">
                                                <div className="card-body">
                                                    为了使用叽叔提供的服务，用户需要注册一个叽叔账户。账户名即为用户所提供的常用邮箱（或手机号），用户需设置密码并确认，通过叽叔下发的验证信息进行账户验证后，该账户即完成初步注册。在个人中心里，用户需要设置相关个人信息。用户可以在账户中查询到自己的网站使用记录和资金情况。<br />
                                                    用户使用叽叔服务，应负责维护自己账户的保密性并限制第三方使用/访问其计算机或移动设备，用户对其账户和密码下发生的所有活动承担法律责任。<br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingEighteen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                                                        信息发布
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseEighteen" className="collapse" aria-labelledby="headingEighteen" data-parent="#data-4">
                                                <div className="card-body">
                                                    叽叔会将服务提供方填写的信息公布于叽叔网站，包括但不限于服务提供者的个人简历、收费标准、擅长领域等。叽叔认真履行审查义务，对服务提供者进行严格审核认证。但是，无法就其所有信息内容的准确性、完整性、真实性等做出实质保证。<br />
                                                    如果用户在叽叔网站张贴内容或提交材料，用户同意授予叽叔非独有的、免费的、永久的、不可撤销的和完全的许可权：在全世界范围内，基于宣传叽叔服务等合法目的合理使用、转载、修改、改编、出版、翻译、创作衍生作品、分发和展示这些内容。<br />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingNineteen">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                                                        订单
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseNineteen" className="collapse" aria-labelledby="headingNineteen" data-parent="#data-4">
                                                <div className="card-body">
                                                    本条款所述“订单”，是指用户在叽叔网站上根据自身需求自行匹配达成的用户之间的服务协议。用户在平台上搜索到合适的服务提供者后，订单在下述条件满足时正式成立：<br />
                                                    用户通过叽叔联系到能够提供服务的服务提供者并商定授课时间、方式等服务信息，并且支付课时费用。<br />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <div className="card-header" id="headingTwenty">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                                                        交易、付款及点评
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwenty" className="collapse" aria-labelledby="headingTwenty" data-parent="#data-4">
                                                <div className="card-body">
                                                    用户可选择线上图文和语音或线下面对面交流方式进行咨询交易。完毕后，由需求方确认，确认完毕叽叔将服务费用支付给服务提供者。用户可以在叽叔平台发表对其他用户的评论、意见和其他内容，以及向平台提出建议、意见或其他信息，但是该等内容不得违反中国现行法律法规及其他规范性文件的要求，不得含有非法、淫秽、威胁、侮辱、诽谤、侵犯隐私、侵犯知识产权的内容或以其他形式对第三方权利构成侵犯。<br />
                                                    叽叔在接到有关权利人的投诉与举报后将采取合理的删除或屏蔽等措施。基于用户的过错给叽叔造成损失时，用户须对叽叔承担赔偿责任。<br />
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
                                                        叽叔服务使用限制
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseTwentyone" className="collapse show" aria-labelledby="headingTwentyone" data-parent="#data-5">
                                                <div className="card-body">
                                                    （一）您在使用本服务时应遵守中华人民共和国相关法律法规、您所在国家或地区之法令及相关国际惯例，不将本服务用于任何非法目的（包括用于禁止或限制交易物品的交易），也不以任何非法方式使用本服务。<br />
                                                    （二）您不得利用本服务从事侵害他人合法权益之行为，否则本公司有权拒绝提供本服务，且您应承担所有相关法律责任，因此导致本公司或本公司雇员或其他方受损的，您应承担赔偿责任。上述行为包括但不限于：<br />
                                                    1、侵害他人名誉权、隐私权、商业秘密、商标权、著作权、专利权等合法权益。<br />
                                                    2、违反依法定或约定之保密义务。<br />
                                                    3、冒用他人名义使用本服务。<br />
                                                    4、从事不法交易行为，如洗钱、恐怖融资、贩卖枪支、毒品、禁药、盗版软件、黄色淫秽物品、其他本公司认为不得使用本服务进行交易的物品等。<br />
                                                    5、提供赌博资讯或以任何方式引诱他人参与赌博。<br />
                                                    6、非法使用他人账户交易。<br />
                                                    7、进行与您或交易对方宣称的交易内容不符的交易，或不真实的交易。<br />
                                                    8、从事任何可能含有电脑病毒或是可能侵害本服务系统、资料之行为。<br />
                                                    9、其他本公司有正当理由认为不适当之行为。<br />
                                                    （三）您理解并同意，本公司不对因下述任一情况导致的任何损害赔偿承担责任，包括但不限于利润、商誉、使用、数据等方面的损失或其他无形损失的损害赔偿（无论本公司是否已被告知该等损害赔偿的可能性）：<br />
                                                    1、本公司有权基于单方判断，包含但不限于本公司认为您已经违反本协议的明文规定及精神，对您名下的全部或部分叽叔账户暂停、中断或终止向您提供本服务或其任何部分，并移除您的资料。<br />
                                                    2、本公司在发现异常交易或合理怀疑交易有疑义或有违反法律规定或本协议约定之虞时，有权不经通知先行暂停或终止您名下全部或部分叽叔账户的使用（包括但不限于对这些账户名下的在途交易采取取消交易等限制措施），并拒绝您使用本服务之部分或全部功能，并通过邮件或站内信或客户端通知等方式通知您，您应及时予以关注。<br />
                                                    3、您理解并同意，存在如下情形时，本公司有权对您名下叽叔账户暂停或终止提供全部或部分叽叔服务，且有权限制您所使用的产品或服务的部分或全部功能（包括但不限于对这些账户名下在途交易采取取消交易等限制措施），并通过邮件或站内信或者客户端通知等方式通知您，您应及时予以关注：<br />
                                                    1）根据本协议的约定：<br />
                                                    2）根据法律法规及法律文书的规定：<br />
                                                    3）根据有权机关的要求：<br />
                                                    4）您使用叽叔服务的行为涉嫌违反国家法律法规及行政规定的：<br />
                                                    5）本公司基于单方面合理判断认为账户操作、资金进出等存在异常时：<br />
                                                    6）本公司依据自行合理判断认为可能产生风险的：<br />
                                                    7）您在参加市场活动时有批量注册账户、刷信用及其他舞弊等违反活动规则、违反诚实信用原则的：<br />
                                                    8）您遭到他人投诉，且对方已经提供了一定证据的：<br />
                                                    9）您可能错误地将他人账户进行了实名制或实名认证的。<br />
                                                    4、如您申请恢复服务、解除上述止付或限制，您应按本公司要求如实提供相关资料及您的身份证明以及本公司要求的其他信息或文件，以便本公司进行核实，且本公司有权依照自行判断来决定是否同意您的申请。您应充分理解您的申请并不必然被允许。您拒绝如实提供相关资料及身份证明的，或未通过本公司审核的，则您确认本公司有权长期对该等账户停止提供服务且长期限制该等产品或者服务的部分或全部功能。<br />
                                                    在本公司认为该等异常已经得到合理解释或有效证据支持或未违反国家相关法律法规及部门规章的情况下，最晚将于得到解释之日起的30个日历天内解除限制。但本公司有进一步理由相信该等异常仍可能对您或其他用户或本公司造成损失的情形除外，包括但不限于：<br />
                                                    1）收到针对该等异常的投诉：<br />
                                                    2）您已经实质性违反了本协议或另行签署的协议，且我们基于保护各方利益的需要必须继续止付款项或暂停执行指令：<br />
                                                    3）您虽未违反国家相关法律法规及部门规章规定，但该等使用涉及本公司限制合作的行业类目或商品，包括但不限于通过本公司的产品或服务从事类似金字塔或矩阵型的高额返利业务模式。<br />
                                                    5、在本公司合理认为有必要时，本公司无需事先通知即可终止提供本服务，并暂停、关闭或删除您名下全部或部分叽叔账户及这些账户中所有相关资料及档案。<br />
                                                    （四）如您需要注销您的叽叔账户，应先经本公司审核同意。本公司注销该账户，即表明本公司与您之间的协议已终止，但您仍应对您使用本服务期间的行为承担可能的违约或损害赔偿责任，同时本公司仍可保有您的相关信息。<br />
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
                                                        责任范围及责任限制
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapse27" className="collapse show" aria-labelledby="heading27" data-parent="#data-6">
                                                <div className="card-body">
                                                    （一）本公司仅对本协议中列明的责任承担范围负责。<br />
                                                    （二）您明确因交易所产生的任何风险应由您与交易对方承担。<br />
                                                    （三）本公司用户信息是由用户本人自行提供的，本公司无法保证该信息之准确、及时和完整，您应对您的判断承担全部责任。<br />
                                                    （四）本公司不对交易标的及本服务提供任何形式的保证，包括但不限于以下事项:<br />
                                                    1、本服务符合您的需求。<br />
                                                    2、本服务不受干扰、及时提供或免于出错。<br />
                                                    3、您经由本服务购买或取得之任何产品、服务、资讯或其他资料符合您的期望。<br />
                                                    （五）本服务之合作单位，所提供之服务品质及内容由该合作单位自行负责。<br />
                                                    （六）您经由本服务之使用下载或取得任何资料，应由您自行考量且自负风险，因资料之下载而导致您电脑系统之任何损坏或资料流失，您应负完全责任。<br />
                                                    （七）您自本公司及本公司工作人员或经由本服务取得之建议和资讯，无论其为书面或口头形式，均不构成本公司对本服务之保证。<br />
                                                    （八）在法律允许的情况下，本公司对于与本协议有关或由本协议引起的任何间接的、惩罚性的、特殊的、派生的损失（包括业务损失、收益损失、利润损失、商誉损失、使用数据或其他经济利益的损失），不论是如何产生的，也不论是由对本协议的违约（包括违反保证）还是由侵权造成的，均不负有任何责任，即使事先已被告知此等损失的可能性。另外即使本协议规定的排他性救济没有达到其基本目的，也应排除本公司对上述损失的责任。<br />
                                                    （九）除本协议另有规定外，在任何情况下，本公司对本协议所承担的违约赔偿责任总额不超过向您收取的当次服务费用总额。<br />
                                                    （十）您充分知晓并同意本公司可能同时为您及您的（交易）对手方提供本服务，您同意对本公司可能存在的该等行为予以明确豁免，并不得以此来主张本公司在提供本服务时存在法律上的瑕疵。<br />
                                                    （十一）除本协议另有规定或本公司另行同意外，您对本公司的委托及向本公司发出的指令均不可撤销。<br />
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
                                    <a className="nav-item nav-link active" id="nav-1" data-toggle="tab" href="#content-1" role="tab" aria-controls="content-1" aria-selected="true">免责声明</a>
                                    <a className="nav-item nav-link" id="nav-2" data-toggle="tab" href="#content-2" role="tab" aria-controls="content-2" aria-selected="false">使用协议</a>
                                    <a className="nav-item nav-link" id="nav-3" data-toggle="tab" href="#content-3" role="tab" aria-controls="content-3" aria-selected="false">叽叔账户</a>
                                    <a className="nav-item nav-link" id="nav-4" data-toggle="tab" href="#content-4" role="tab" aria-controls="content-4" aria-selected="false">叽叔服务使用规则</a>
                                    <a className="nav-item nav-link" id="nav-5" data-toggle="tab" href="#content-5" role="tab" aria-controls="content-5" aria-selected="false">叽叔服务使用限制</a>
                                    <a className="nav-item nav-link" id="nav-6" data-toggle="tab" href="#content-6" role="tab" aria-controls="content-6" aria-selected="false">责任范围及责任限制</a>
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
            <Header activeTitle="us" />
            <BreadCrumb hasSearchBox="true" />
            <FAQContent />
            <Footer />
        </div>
    );
}
