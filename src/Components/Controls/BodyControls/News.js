import React from 'react';
import '../../ControlStyles/BodyControlStyles/News.css';

class News extends React.Component {
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
	render() {
		return (
			<div className="container">
				<div id="jogar-globe-news" alt="Soccer Globe"/>
				<div id="news">
		            <h3>Thoughts on US Soccer</h3>
		            <p> In the early days of codified soccer (in the mid 19th century) soccer was actually fairly popular in the US, at least compared to the mid-20th century. A few things happened:</p>
		            <ol>
		                <li> Other "american" sports became much more popular. Really organized "professional" soccer started to spring up around the world around the end of the 19th century. By that time, there were already hundreds of professional baseball teams, and American Football had spread pretty widely via college teams. In this way, America's sports culture was already created by the time soccer arrived. A similar thing happened in Australia and Canada.</li>
		                <li> Lack of Professional leagues. This comes from 1, but the US has had a spotty record of fielding top-level leagues. The NASL started only in the 1970s and folded, and the US didn't get another league with reasonable following until the 1990s.</li>
		                <li> Lack of youth development programs. The combination of 1 and 2 meant the best American athletes go into "American" sports. There are literally more than a million high school football players, and something like 60,000 college football players. The numbers are similar for basketball and baseball. Every high school in the country has an organized football system with coaches who are familiar. The same cannot be said for soccer.</li>
		                <p> In fact, many parents put their kids into soccer precisely because they see it as not as dangerous or as competitive as American sports are, so many US soccer programs for kids are more like fitness activities than completion. In Europe, most professional teams field academies where young kids are brought up in a difficult and competitive environment and are thus much better prepared with professional experience.</p>
		                <li> Lack of decent quality means the US hasn't been good, which means the US fans are less interested. The MLS has gotten better, but without a top-quality league, the US isn't watching the best soccer. Without top-quality players, the US hasn't done well at world cups. This reinforces in the minds of Americans that the sport is for people from other countries. Americans don't really feel good about watching a sport where they might lose to Costa Rica.</li>
		                <li> Pay is higher in other sports (at least for Americans). The best paid American soccer players make a few million a year (I think Clint Dempsey gets something like $7 million a year), while someone like Kobe Bryant can make $25 million a year, and has been doing that for more than 15 years. A top American athlete in middle school/high school might look at Miguel Cabrera's $293 million, Colin Kaepernick's $110 million or LeBron James' $110 million contract and realize that only Ronaldo or Messi make that much cash playing soccer (in Cabrera's case, that's probably more than Messi or Ronaldo or the time period, Cabrera will be 40 when the contract ends, and both the soccer players will be retired). He may then decide that he's better off sticking with American sports.</li>
		            </ol>
		            <p> Now it's possible that development programs are getting better as the MLS gets better. The US world cup squad has a player from the Seattle Sounder's youth academy, DeAndre Yedlin, so we could see something different from the US in another 10 years.</p>
		            <h5>Posted on April 1st, 2017 at 9:00 am</h5>
		            <hr/>
		            <h3>Thoughts On Lionel Messi</h3>
		            <p> As long as Messi plays, exists, and even longer, the thought of him being the greatest will be there.
		                <br/>
		                <br/>Doubt will probably always exist as well, because he hasn’t had the fortune of winning something with Argentina (at senior level; he already won the Olympics).
		                <br/>
		                <br/>It’s sad that, despite having won so much, he’s still not satisfied without winning something with Argentina. It’s sad the amount of pressure he has.
		                <br/>
		                <br/>It’s sad that many Argentinian fans blame him for their losses, despite the fact that they wouldn’t even be playing the finals without him. It’s sad that a lot people feed on his losses.
		                <br/>
		                <br/>It’s sad that people enjoy him failing and crying. It’s sad that people fail to understand that this is an era when it’s much more difficult to win a title than in Pele’s era, or Beckenbauer’s era, or Maradona’s era, or Ronaldo’s era, or Zidane’s era.
		                <br/>
		                <br/>The only players in the world who could dispute Messi’s crown, based on titles, are Xavi and Iniesta. And both of them acknowledge Lio as the greatest.
		                <br/>
		                <br/>It’s sad that people call him a lot of things despite having chosen to play with his country (the country who rejected him when he was little), when he could be playing and winning everything with Spain.
		                <br/>
		                <br/>For me, Messi is the greatest ever. For others, he’s not, and that’s okay. But of we were to give a list of the 5 best players ever, he’d make the list, and that’s more than anyone else can say.</p>
		            <h5>Posted on March 28th, 2017 at 12:50 pm</h5>
		            <hr/>
		            <h3>The Node</h3>
		            <p> I would have to say Mobile Development is my strong suit, specifically iOS. Xcode to this day is my absolute favorite IDE hands down. Although, to be quite honest, with the laughable IDE's higher educational institutions have you learn like Qt and Netbeans, my standards for full on IDE's isnt too high. Also, as for you android, you could do better. I read somewhere that your first IDE is like your first romantic relationship because the first IDE you fall in love with will forever be the comparison you make on other IDE's.
		                <br/>
		                <br/>Fullstack Webdevelopment would have to be my second strong suit. This wasn't until I built Jogar and realized it needed a website which forced me to brush up on my webdevelopment skills. After successfully building the site using the standard HTML/CSS/JS, I planned on hosting it using AWS (Amazon Web Services). For whatever reason the DNS wasn't connecting with my domain name from Google Domains so out of frustration I looked for another alternative. One that I am SO happy I made.
		                <br/>
		                <br/>Node.js is here to stay. Atleast, I hope it is because I'm absolutely in love with it. After leaving Amazon I decided to build an Express HTTP Server using node.js and deploying it on Heroku. Heroku connected with my Google Domain without any hick-ups and now I get to say my site is running on Node.js! Now im just looking for an excuse to incorporate socket.io to my site. Support chat feature using socket.io? Display real-time games on a map using socket.io? The possibilities are endless! Major Jogar update coming soon to iOS!
		                <br/>
		                <br/>Heriberto Prieto, Founder</p>
		            <h5>Posted on March 25th, 2017 at 5:00 pm</h5>
		            <hr/>
		            <h3>Never Go Another Day Without Playing The Beautiful Game</h3>
		            <p> As a 'youngster' I always wondered why it was that adults stopped playing soccer. There aren't many things in life that bring me undescribable joy on a consistent basis. That challenges my creativity. That although I could keep training everyday and improving my skills, it just never gets old and there is never nothing new to learn or improve on.
		                <br/>
		                <br/>I could say it's a blessing to have been raised in a family that views soccer as a second religion. I could also say it's a blessing to have been raised in a family with engineers at heart (not by trade) which got me interested in technology and later made me fall in love with programming. It would only make sense that I combine my two loves and 'poke a hole into the universe' as the great Steve Jobs once said.
		                <br/>
		                <br/>After highschool a group of us would meet at a local park every Monday and Wednesday and play little scrimmages. It began with about thirty of us. We had tournaments amongst eachother and had a BEAUTIFUL time. This unfortunately, only lasted for about one year. After that, some friends moved away, others began school in the evenings, one went to jail and others got jobs. Life happened. It was on a Wednesday night that only three of us showed up. It was then that we realized it was the end of these meetings. It was then that I learned exactly why every adult before me stopped playing 'The Beautiful Game'. Life.
		                <br/>
		                <br/>I was not to be defeated. I was not to give up. Others may have taken this as a sign to stop playing, but I could NOT do that. There was a problem in the universe and I needed to fix it. For my happiness and for the happiness of others. This was late October 2014.
		                <br/>
		                <br/>On October 22nd 2014, Apple had their annual keynote where they would introduce their latest mac offerings. But this year, they also introduced something else. 'Swift'. An all new programming language for building applications on iOS and OSX. I knew this was my chance to fix the problem every soccer player before me faced. I bought an iMac early September, downloaded Xcode and taught myself how to program.
		                <br/>
		                <br/>After two years of obsessive self taught programming, I am finally able to build a production quality application. On February 24 2017, at exactly 4:26pm, walking to my car from my c++ class I received an email from the iTunes Store that read 'The status for your app, Jogar, is now Ready for Sale'.
		                <br/>
		                <br/>Heriberto Prieto, Founder</p>
		            <h5 className="time-posted">Posted on March 3rd, 2017 at 2:00 am</h5>
	        	</div>
			</div>
		)
	}
}

export default News;