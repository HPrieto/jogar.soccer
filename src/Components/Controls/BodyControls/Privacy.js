import React from 'react';
import '../../ControlStyles/BodyControlStyles/Privacy.css';

class Privacy extends React.Component {
	constructor (props) {
		super(props);
		this.scrollUp = this.scrollUp.bind(this);
	}
	scrollUp() {
        document.body.scrollTop = 0;
    }
    componentWillMount() {
    	this.scrollUp();
    }
	render() {
		return (
			<div className="container">
				<div id="jogar-player-privacy" alt="Soccer Player"/>
				<div id="privacy">
					<h1>Jogar Privacy Policy</h1>
		            <h4>Last Modified: January 23, 2017</h4>
		            <br/>
		            <br/>
		            <p>This document is of a contractual nature and is an appendix to the "Terms and Conditions" applicable for downloading and using the "Jogar" Application.</p>
		            <br/>
		            <p>VERY IMPORTANT: By accepting these "Terms of Use" and this Privacy and Protection of Private Life Policy, you expressly accept the processing of data, including your personal data, provided for therein. If you do not consent to such processing of personal data, you must refrain from downloading and using the "Joga" Application.</p>
		            <br/>
		            <h2>SUMMARY</h2>
		            <h3>Some preliminary definitions</h3>
		            <ul>
		                <li>IMPORTANT INFORMATION</li>
		                <li>WHAT YOU ARE CONSENTING TO</li>
		                <li>Collection of Your Registration and Usage Data</li>
		                <li>Processing Your Registration and Usage Data and strict compliance with your Privacy by Jogar</li>
		                <li>Push Notifications</li>
		                <li>Advertising</li>
		                <li>Recipients</li>
		                <li>Your Friends, other soccer players and Jogar</li>
		                <li>Transfers outside the United States</li>
		                <li>Transfers to the United States</li>
		                <li>Storage period</li>
		                <li>Use of subcontractors</li>
		                <li>Rights of access and rectification</li>
		                <li>COMMITMENTS OF THE USER</li>
		                <li>SECURITY AND CONFIDENTIALITY</li>
		            </ul>
		            <h2>MORE PRELIMINARY DEFINITIONS</h2>
		            <br/>
		            <ul>
		                <li>Alias: Identity under which a User appears on the "Jogar" Application with respect to their Friends and other Users/Soccer Players.</li>
		                <li>Soccer Community: Any person with the status of User with whom another User shares his/her geolocation and who shares with them their own geolocation, subject to their respective settings of the "Jogar" Application.</li>
		                <li>"Jogar" Application: Computer program, published by Jogar in the form of "App", whose main purpose is to allow any User to be geolocated by other Soccer Players around the world, according to his/her preferences, and to geolocate other Soccer Players around the world according to their preferences.</li>
		                <li>"TOS" stands for "TERMS OF USE", which is considered a contract and to which You are a party, of which this document is the appendix.</li>
		                <li>"Account": The space allocated to each User within the "Joga" Application and accessible only to the User who owns it, enabling him/her to have access to all the Services.</li>
		                <li>"Registration Data": Any information you provide to us, other than Usage Information and, in particular, your Alias ​​(your first and last name or a pseudonym), email address and phone number.</li>
		                <li>"Usage Data": All information that Joga collects from your use of the "Joga" Application and, in particular, your IP Address, your Geolocation, the version of your Smartphone and/or its operating system , the pages of the "Joga" Application that you visit, the battery level of the Smartphone, the SSID address of the WIFI terminal, the name of the WIFI network the User is connected to, the actions you carry out in terms of Exchanges and communication with soccer players around the world in particular and, more generally, any information related to your use of the Services.</li>
		                <li>Service(s): Any kind of functionality proposed on the "Jogar" Application by Joga to Users and, most importantly, to be able to share geolocation between Soccer Players and exchange correspondence with Soccer Players.</li>
		                <li>"Smartphone": Any telephone device for downloading the "Jogar" Application.</li>
		                <li>"Partners": Third parties with whom Jogar may enter into a commercial agreement.</li>
		                <li>User: Any natural person, over the age of majority according to the regulations of their country, which is registered on the "Joga" Application by means of a valid mobile phone number.</li>
		            </ul>
		            <h2>IMPORTANT INFORMATION</h2>
		            <h3>In accordance with the aforementioned law "Computer Technology and Freedom", you are informed:</h3>
		            <ul>
		                <li>Jogar is responsible for the processing of Your Registration and Usage Data,</li>
		                <li>That, as regards the Registration Data, their information is obligatory to finalize your registration for the "Jogar" Application, without which You cannot complete it,</li>
		                <li>That the purposes of these treatments, the recipients or categories of recipients of the data, as well as the transfers of personal data to a non-member State of the United States Community are stipulated in the article "What You are consenting to",</li>
		                <li>That the rights you legally hold are set out in the article "Rights of access and rectification".</li>
		            </ul>
		            <h2>WHAT ARE YOU CONSENTING TO</h2>
		            <h3>Collection of Registration and Usage Data</h3>
		            <br/>
		            <p> Collection of Your Registration and Usage Data
		                <br/>
		                <br/>Your Registration Data is what You provide to us when you register on the "Jogar" Application and then, if applicable, you complete and/or update. We will never collect Registration Data by browsing the Internet for example to verify the information you have provided to us.
		                <br/>
		                <br/>Your Usage Data (and, in particular, your geolocation) are collected automatically, using the "Jogar" Application installed on your Smartphone.
		                <br/>
		            </p>
		            <h3> The attention of the User is drawn to the fact that geolocation data corresponds, on the one hand, to the geographical coordinates of a point on a map and, where possible, to a postal address.</h3>
		            <br/>
		            <h2> Processing your Registration and Usage Data and strict compliance by Jogar with your Privacy</h2>
		            <p> Jogar uses the User Registration and Usage Data with the following aims:</p>
		            <br/>
		            <ol>
		                <li>To provide you with the Services defined in the TOS and, above all, to enable you to create your network of Soccer Players around the world, by means of your Account, in order to be geolocated by them and, if necessary, to geolocate them as well,</li>
		                <li>To exchange with other Soccer Players messages in the formats authorized by the "Jogar" Application</li>
		                <li>To carry out research and development activities concerning the use of the "Jogar" Application by the User(s) and/or their travels and/or exchanges, communications and behaviors of the Users and/or the constitution and evolution of the Soccer Player networks, with the aim of improving the functionality of the "Jogar" Application and/or producing statistical data.</li>
		            </ol>
		            <br/>
		            <p> Collection of your Usage Data being totally automated, it collects by hypothesis any geographical coordinate you are going to, according to a methodology developed by Joga in particular in terms of delay between two collection instants.
		                <br/>
		                <br/>The statistical studies produced by Jogar, using this Registration and Usage Data, are completely anonymous and will never include any reference to the identity of the Users or even their simple Alias.
		                <br/>
		                <br/>With regard to Your Registration Data, the purposes of their processing are to determine which groups (e.g. national, users of different Smartphone types, operating systems, etc.) are statistically relevant to the different studies that Joga carries out (and, therefore, our statistics never deal with a single person).
		                <br/>
		                <br/>With regard to your Usage Data, the purposes of their processing involve, on the basis of these groups, on the one hand, measuring and analyzing the movements of the Users over time and, on the other hand, studying exchanges habits and communication between Soccer Players, in both cases to produce statistical studies and improve the delivery of our Services.
		                <br/>
		                <br/>Your Registration and Usage Data is also the subject of studies to prevent any abuse or attempted fraud to which it and/or other Users may be subjected.
		                <br/>
		                <br/>The article 8 of the law no. 78-17 of 6 January 1978 modified, so-called "Computer Technology and Freedom" "prohibits collection or processing of personal data which reveals, directly or indirectly, racial or ethnic origins, political, philosophical or religious beliefs or trade union membership of persons, or relating to the health or sexual life of such persons." No Registration Data of this type will ever be requested by Jogar and, in any case, Jogar commits to never use as criteria, in the processing of your Registration and Usage Data, the data covered by the new legal provisions described above.
		                <br/>
		                <br/>
		            </p>
		            <h2>Push Notifications</h2>
		            <p> You may opt for Services consisting of receiving notifications from Jogar, in the form of a "push", that is to say that Joga sends you automatically. You can stop these push notifications at any time from your Smartphone settings. These "push" notifications are mainly addressed to you by means of the "Joga" Application and, by exception due in particular to technical constraints, by SMS.</p>
		            <h2>Advertising</h2>
		            <p> From your Registration and Usage Data and depending on the profile, we will be able to send you advertisements.
		                <br/>
		                <br/>On the other hand, no advertising from a third party may be addressed to you through the "Jogar" Application.</p>
		            <h2>Recipients</h2>
		            <h3><span>Your Friends and Jogar</span></h3>
		            <p> First and foremost, the recipients of your Registration and Usage Data (with regard to your geolocation and the battery level of the Smartphone) are, of course, Soccer Players who are also showing their own location, to the exclusion of other Users, to which you want to communicate your geolocation and provided that you have not deactivated the functionality from Your Account.
		                <br/>
		                <br/>Secondly, recipients of your Registration and Usage Data are our only internal services at Joga, with the absolute exception of any other person (including our Partners). Our partners only have access to statistical data.</p>
		            <h2>Transfers outside the Unites States of America</h2>
		            <br/>
		            <p> Jogar draws your attention to the fact that if your friends are foreign or, in any case, are abroad, they have access to your geolocation.
		                <br/>
		                <br/>Consequently, if Soccer Players/Users are outside the The Unites States of America, their Registration and Usage Data is of course accessible to them from all over the world (subject to connection to a telecommunication network).
		                <br/>
		                <br/>Outside the United States of America, although some countries have regulations on the protection of personal data, most countries are not considered to have an adequate level of protection by the United States.
		                <br/>
		                <br/>By agreeing to be a party to the TOS, you expressly consent to the transfer of your Registration and Usage Data to local and Global Soccer Players/Users who may be located outside the United States of America, including countries that do not have an adequate level of protection.</p>
		            <h2>Transfers to the United States of America</h2>
		            <p> If you are using the "Jogar" Application from a country outside of North America, please note that we do our utmost to enforce the applicable rules and that it defines a very high level of Protection of your personal data.For any specific question or difficulty related to the regulations of your country (if it does not belong to the United States), you can contact Jogar: Duskayame@gmail.com.</p>
		            <h2>Storage period</h2>
		            <p> Jogar is committed to keep the Registration and Usage Data for the duration of the TOS.
		                <br/>
		                <br/>At the end of the TOS, whatever the cause, the User acknowledges and agrees that:
		                <br/>
		                <br/>Its Registration Data shall be retained by Jogar for a period of three (3) years, unless objected by Jogar, in order to be contacted again by Jogar to benefit from any other services it may provide, its Usage Data, once rendered anonymous, is retained by Jogar for statistical purposes.
		                <br/>
		                <br/>Use of subcontractors
		                <br/>
		                <br/>Jogar may be required to entrust the performance of certain tasks related to its activity to third party service providers ("subcontractors") who, pursuant to Article 35 of the above-mentioned law "Computer Technology and Freedom", only process Registration and Usage Data on behalf of Jogar and, in any event, act only upon instructions from us. This applies in particular to our providers hosting the "Jogar" application and sending SMS.
		                <br/>
		                <br/>Consequently, Jogar is solely responsible for the processing and these providers are considered "subcontractors" within the meaning of the law.
		                <br/>
		                <br/>We select our subcontractors so that, in accordance with the law, they offer sufficient guarantees to ensure the implementation of the security and confidentiality measures it requires compliance for.
		                <br/>
		                <br/>These services may be entrusted to companies not domiciled in the United States of America. By agreeing to be a party to the TOS, you expressly consent to the transfer of your Registration and Usage Data.
		                <br/>
		                <br/>
		            </p>
		            <h2>Rights of access and rectification</h2>
		            <p> You can access and rectify your Registration Data at any time by logging into the "Jogar" Application.
		                <br/>
		                <br/>In accordance with the law "Computer Technology and Freedom" mentioned above, you have the right to access and rectify any information concerning you, which you may exercise by contacting Jogar:
		                <br/>
		                <br/>Either by mail: Fontana, CA – United States, or by email to the following address: Dusclops@live.com.
		                <br/>
		                <br/>You may also, for legitimate reasons, object to the processing of your personal data. In this case, your use of the "Jogar" Application may end and the TOS will be terminated by Jogar.
		                <br/>
		                <br/>
		            </p>
		            <h2>COMMITMENTS OF THE USER</h2>
		            <p> If you allow a third party to use your Smartphone, you must tell them that they should disable your geolocation and that, if they cannot, they can be geolocated by local and global Soccer Players, being specified that they will be led to believe, but erroneously, that it is your own geolocation.</p>
		            <h2>SECURITY AND CONFIDENTIALITY</h2>
		            <p> In accordance with article 34 of the law "Computer Technology and Freedom" mentioned above, Joga commits to take all necessary precautions, in view of the nature of the data and the risks presented by the processing carried out, to preserve the security of the Registration and Usage Data, and in particular to prevent them from being deformed, damaged or accessed by unauthorized third parties.
		                <br/>
		                <br/>Jogar commits that any subcontractor it calls in application of article "Use of subcontractors and control" shall comply with this obligation.
		                <br/>
		                <br/>In particular, exchanges of Registration and User Data between Users and Jogar, with the "Jogar" Application, are carried out by means of computer encryption protocols, such as "https".
		                <br/>
		                <br/>All Your Registration and Usage Data is confidential to third parties (Except Local and Global Soccer Players/Users), including our partners. In addition, our subcontractors are bound by a contract or confidentiality obligations relating to Your Registration and Usage Data.
		                <br/>
		                <br/>Only a part of Your Registration and Usage Data is communicated to Local and Global Soccer Players/Users, as described in the article "Recipients".
		                <br/>
		                <br/>
		            </p>
		            <h2>FORMALITIES WITH THE NATIONAL COMMISSION FOR DATA PROTECTION</h2>
		            <p> Jogar proceeded to the declaration of the treatments of your Registration and Usage Data to the National Commission for Data Protection (CNIL).</p>
				</div>
			</div>
		)
	}
}
export default Privacy;