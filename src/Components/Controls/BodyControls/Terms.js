import React from 'react';
import '../../ControlStyles/BodyControlStyles/Terms.css';

class Terms extends React.Component {
	constructor(props) {
		super(props);
		this.scrollUp = this.scrollUp.bind(this);
	}
	scrollUp() {
        document.body.scrollTop = 0;
    }
    componentWillMount() {
    	this.scrollUp();
    }
	render () {
		return (
			<div className="container">
				<div id="jogar-player-terms" alt="Soccer Player"/>
				<div id="terms">
		            <h1>Jogar Terms of Service</h1>
		            <h4>Last Modified: January 23, 2017</h4>
		            <br/>
		            <br/>
		            <h2>Company publishing the application</h2>
		            <br/>
		            <br/>
		            <p> Welcome to the Jogar service, hereafter designated as “the Service”. The following Terms of Use are to apply between the users of the service, hereafter designated as “You” and Jogar, a company located in Fontana, CA 92335 (US) and constitute a contractual agreement governing your access to the web site, mobile applications and other services of the Jogar (the “Service”) as well as to the utilization thereof.
		                <br/>
		                <br/> This version of the Terms of Use is a simple translation of the “Terms and Conditions” (also available online and in-app) which is the only binding one. All translations from the English “Terms and Conditions” are non-binding, and only here to help international users understand how their data is protected.
		                <br/>
		                <br/> “The Service” contains information and resources published by Joga as well as certain third-party content. The Terms of Use of Joga only govern your utilization of the “Service”. They do not apply to the utilization of other products, software or services and do not modify or affect other agreements, be they present or future with Joga. Joga provides you with access to the “Service” on the understanding that you accept these Terms of Use of Joga, including your acceptance of the Confidentiality Policy of the “Service”. This set of documents, hereafter designated as the “Conditions of Service” may be updated at any time without previous notice. “You” designates” any person who accesses the “Service” and those services available via the “Service”, hereafter designated as “the Services”.
		                <br/>
		                <br/>
		            </p>
		            <h3>Publishing management: Joga: Heriberto Prieto</h3>
		            <h3>Publishing responsibility: Joga: Heriberto Prieto</h3>
		            <h3>Concept and application: Joga: Heriberto Prieto</h3>
		            <br/>
		            <p> The Confidentiality Policy and Privacy Protection of Joga describes the information relative to the practices of Joga in the field of collection and use of information which concerns you or which concerns your use of the “Service”. You accept that Jogar, in conformity with its Confidentiality Policy, may collect, use, disclose, transmit, process and stock information which concerns you and which concerns your account, which is necessary for the “Services”, for the operation and for making the “Service” available.
		                <br/>
		                <br/> “You” are entitled to update, modify or suppress your personal data, in conformity with the Confidentiality Policy and Privacy Protection. The personal data collected through the “Service” may be stored and processed in all those countries in which Joga or its service suppliers are represented. By using the “Service”, you accept the potential transfer, recording and storage of your data outside of your country of residence. When the data is processed in another country, this data may be accessible to the local legal authorities. Please refer to the Confidentiality and privacy protection Policy.
		                <br/>
		                <br/> Please read the present Conditions of “Service” carefully before accessing or using the “Service”. When you provide us with your personal data, you are signifying your agreement with our Confidentiality and privacy protection Policy. If you do not accept the latter, please do not provide us with your personal data. Any person who has not reached the legal age of majority (most countries recognize 18 years of age as being the legal majority) must read and consent to the Confidentiality and privacy protection Policy with his/her parents or legal representative so as to guarantee that you, your parents or your legal representative understand this Policy.
		                <br/>
		            </p>
		            <br/>
		            <h2>Preamble</h2>
		            <br/>
		            <p> Jogar has developed this application so as to enable users to remain in contact with other Soccer Players in their community/communities, to assist in localizing them. The use of this application implies that you accept to be bound by the terms and Terms of Use and to respect all laws, which apply to you as a user as well as to Jogar. Thus, the user with an illegal intent may not hold Jogar responsible for the use of this application. The use of this application is personal and may not be transferred to a third-party.</p>
		            <br/>
		            <h2>Security and encryption of personal data</h2>
		            <p> To access the “Service”, you must provide a telephone number, your name, as well as the Christian names and telephone numbers of the contacts you want to register on the “Service”. Certain parts of this application are secured, in particular those pages where you have to capture personal and confidential data. This means that the data, which you transmit to the application through these pages, is encrypted. In this manner, you can provide these indications in full security. However, you must take all precautions to carry out capture operations in a discreet manner: do not allow anyone else to have access to your screen. When you provide this personal data, you are undertaking to provide accurate information, which is complete and up to date. You are responsible for maintaining the confidential nature of your telephone number, password and for all usage of your account. Jogar records and stores the Location Information automatically in the server forever in a secure manner. If ever you should notice or suspect any fraudulent or non authorized usage of your account which could endanger the viable security of the account, you undertake to inform Joga as soon as possible using the following email address: Duskayame@gmail.com providing the following information: Last name, First name and Telephone number.</p>
		            <br/>
		            <h2>Rules for the use of the service</h2>
		            <br/>
		            <p> “The Service” enables you to communicate via the various tools placed at your disposal (Email, blog, social networks, assistance forum, etc…), which are designed to facilitate communication with Jogar or other users. You undertake to use these tools solely to circulate, send and receive messages and contents as required by and in connection with the object of the “Service”. In no case may you abuse the “Service” by knowingly introducing any virus, Trojan horse or any other malicious element with the aim of causing technical damage or attempt to infiltrate the software of the “Service”. Any attempt at intrusion without authorization into the “Service”, the servers, computers and connected data base, or any inappropriate usage of the “Service” will be considered as an infraction subject to criminal process. Jogar will inform the competent authorities of any violation so as to ensure that the applicable laws are respected and will transmit all information (name, email, telephone etc. …), Which concerns you which may be of use to such authorities. In the case where Joga suspects the slightest violation of this section, Jogar may initiate legal action and cooperate with the relevant authorities, and may immediately suspend the family account with no obligation at all to refund any sums advanced for any current subscription.</p>
		            <h2>Customer suggestions and comments</h2>
		            <br/>
		            <p> Should you provide or send suggestions or comments with the aim of improving Jogar, products and services, you make over to Jogar in an effective and irrevocable manner all rights, titles, profits and access for the whole world regarding the contents of such comments or suggestions, without any right to any compensation, gratification or recompense from Joga. You agree to waive in an effective and irrevocable manner any claim against Jogar or any dependent company, which might be in connection with those comments or suggestions, which you sent or provided to Jogar. You also accept that this waiver against any claim shall be effective without the need for any ulterior recourse to action or the execution of any document by yourself.</p>
		            <br/>
		            <h2>Intellectual property rights and copyright</h2>
		            <br/>
		            <p> All the information and/or documents and/or software/programs contained in the application, as well as all the elements created for the application are the property of Jogar. This information, these documents, software/programs or elements are subject to laws, which protect copyright when they are placed at the disposal of the public on this application. No license or right other than that to consult the application is conferred on anyone with regard to intellectual property rights. Unless expressed to the contrary, the social denominations, logos and brands mentioned in this application are the property of Jogar. They cannot be used without the prior written authorization of Joga. All the copyright of protected works, which are reproduced and communicated on this application, is reserved. Except in the case of authorization, any use of works other than individual and private consultation is prohibited.</p>
		            <br/>
		            <h2>Limitation of liability</h2>
		            <br/>
		            <p> The information, recommendations and user advice (hereafter referred to as the “ Information”) available on the applications and the linked sites is proposed to you in all good faith. However, Jogar does not guarantee the accuracy of this information in an exhaustive manner. You assume totally the risks linked to the confidence, which you place in such information. This information is provided on the condition that you or any other person who receives or uses such information are able to determine its relevance for the objective which you wish to attain. In no case will Joga be responsible for any damage, which might result from the confidence, which you place, in this information and/or the use thereof. In particular, you recognize that Jogar may not be held responsible for any misuse and/or pirating of the telephone number and/or connection identifiers and user passwords. As user of the application, you recognize that you have made yourself acquainted with the Terms of Use of this application and that you undertake to respect such conditions. You agree that you have the necessary competence and means to use this application. Jogar employs its best endeavors to offer to users information and/or tools which are available and verified so as to enable to correct operation of the application but cannot be held responsible for errors, for a lack of availability of functionalities and/or the presence of virus or breakdown of support material (mobile phones, tactile tablets or any other kind of hardware support) on which the application in installed or for potential failures or insufficiency of networks (specifically the coverage of the operators retained by the users but also, and in a non exhaustive fashion, for the networks and intermediary networks of Joga over which Joga has no control, including notably Wifi and GPS connections) as well as more generally for technical problems inherent to the supply of an on-line communications service to the public (momentary interruption of access, deficient transmission of data, incompatibility of software, software packages or supports, external intrusion or presence of a computer virus etc…) nor be held responsible for any damage, direct or indirect, resulting from the use of the “Service” by the user. Jogar declines all responsibility, either explicit or implicit if the use of the “Service” and/or information does not meet the expectations of the users and in particular, Jogar will not be held responsible in the case of delay or inability to transmit a position. Neither will Jogar assume responsibility in the case of force majeure recognized by law or by jurisprudence. Consequently, the user recognizes that he is responsible for all the risks in terms of satisfaction as to the quality of operation, of availability, of security, of accuracy and of effort, within the maximum limits authorized by the applicable law. The user therefore recognizes that he is using this application under his sole responsibility.</p>
		            <h2>Modification of the Terms of Use</h2>
		            <br/>
		            <p> Jogar reserves the right to modify the present Terms of Use, the functionalities offered on the application or the rules of operation of the latter at any time without prior notice. The updated version will be effective depending on the date of publication, unless specified to the contrary in the updated Terms of Use. You can consult the most recent version of the Terms of Use at any time on the Service. Your acceptance of the Terms of Use by continuing to use the “Service” once the new version of the Terms of Use has become effective means that you accept the new version of the Terms of Use. If you do not accept the new version, you must immediately cancel your inscription and /or stop using the “Service”.</p>
		            <br/>
		            <h2>User participation</h2>
		            <br/>
		            <p> Jogar is open to any information and participation from users, which are intended to improve the functionalities or the use of the application. You recognize that the transmission of such information does not create any right to any kind of remuneration.</p>
		            <br/>
		            <h2>Suppression of an account</h2>
		            <br/>
		            <p> In order to suppress an account, you must send Jogar an email to the following address: Duskayame@gmail.com sent from the email used to register with the service. This email must contain: The telephone number, Surname and First name. Because of technical constraints, the suppression of the account and the interruption of the dispatch of emails to the various parties concerned will intervene within a maximum period of seven (7) days.</p>
		            <br/>
		            <h2>Applicable law and competent jurisdiction</h2>
		            <br/>
		            <p> These present Terms of Use are governed by – and interpreted in conformity with - US legislation. You accept in an irrevocable manner the jurisdiction of courts situated in the United States of America for any legal action which may result from or be in connection with the present Terms of Use and and/or the use of this application.</p>
		        </div>
			</div>
		)
	}
}
export default Terms;