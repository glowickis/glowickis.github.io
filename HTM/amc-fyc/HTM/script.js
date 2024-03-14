var video_src = 'video_36287_The_Terror_FYC_Spot_2018_30_FINAL_970x250.mp4';

var background_exit,
	introSkip_btn,
	close_btn,
	replay_btn,
	intro_video,
	user_video,
	//end_video,
	videoContainer,
	intro_vidSource_mp4,
	user_vidSource_mp4;
	//end_vidSource_mp4;

var video_controls,
	vid_play,
	vid_pause,
	vid_sound,
	vid_mute,
	controlBackground,
	vid_scrubber_bg,
	vid_scrubber_progress;
var scrubberWidth = 233; /*width of the fill progress color when video is compleated-- match the witch of the #vid_scrubber_bg in the CSS*/
var progWidth;
var seekBar;
var progInterval;

var currentVidLabel = "Trailer1_Video";
var tempIndex = 0;

var introPanel,
	userPanel,
	fadeout;

var user_panel,
	user_videoCover;


var img_titleTreatment,
	img_text_fyc,
	resolve_background;

var img_glitch,
	resolve_art,
	resolve_quote,
	resolve_fadeout;


var animationIsDone     = true;
var timelineInitilized 	= false;
var reps =  0;
var tl; /*timeline*/

var userInteraction 	= false;
var userSkipedToTrailer = false;
var introPanelIsOpen 	= true;
var userPanelIsOpen 	= false;
var onEndFrame			= false;

function mainInit() {

	
	background_exit 		= document.getElementById("background_exit");
	introSkip_btn 			= document.getElementById("introSkip_btn");
	close_btn 				= document.getElementById("close_btn");
	replay_btn 				= document.getElementById("replay_btn");
	intro_video 			= document.getElementById("intro_video");
	user_video 				= document.getElementById("user_video");
	//end_video 				= document.getElementById("end_video");
	videoContainer			= document.getElementById("videoContainer");
	intro_vidSource_mp4 	= document.getElementById("intro_vidSource_mp4");
	user_vidSource_mp4 		= document.getElementById("user_vidSource_mp4");
	//end_vidSource_mp4		= document.getElementById("end_vidSource_mp4");


	video_controls				= document.getElementById("video_controls");
	vid_play					= document.getElementById("vid_play");
	vid_pause					= document.getElementById("vid_pause");
	vid_sound					= document.getElementById("vid_sound");
	vid_mute					= document.getElementById("vid_mute");
	vid_scrubber_bg				= document.getElementById("vid_scrubber_bg");
	vid_scrubber_progress		= document.getElementById("vid_scrubber_progress");
	
	user_panel					= document.getElementById("user_panel");

	img_titleTreatment 			= document.getElementById("img_titleTreatment");
	img_text_fyc				= document.getElementById("img_text_fyc");
	//end_logo					= document.getElementById("end_logo");

	img_glitch					= document.getElementById("img_glitch");
	resolve_art 				= document.getElementById("resolve_art");
	resolve_quote 				= document.getElementById("resolve_quote");
	resolve_background 			= document.getElementById("resolve_background");
	

	resolve_fadeout					= document.getElementById("resolve_fadeout");


	//--------------------------------------------------------------------------------------START

	setVideoSources();
	showIntroPanel();
	startIntro();
	addListeners();




}

function setVideoSources(){

	intro_vidSource_mp4.setAttribute('src', Enabler.getUrl(video_src) );

	intro_video.load();

	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach('intro_video', intro_video);
	});

	user_vidSource_mp4.setAttribute('src', Enabler.getUrl(video_src));

	//end_vidSource_mp4.setAttribute('src', Enabler.getUrl('video_CBS_STRANGE_ANGEL_wallpaper_animation_970x250_textless.mp4'));

	//end_video.load();
}

function startIntro() {
	console.log("start intro");

	
	if(intro_video.currentTime > 1){
		intro_video.currentTime = 0;
	}

	intro_video.volume = 0;
	intro_video.play();

}

function addListeners() {
	//console.log("addListeners"); 
	
	introSkip_btn.addEventListener('click', handleSkipIntroClick, false);
	
	intro_video.addEventListener('click', handleSkipIntroClick, false);

	close_btn.addEventListener('click', handleCloseClick, false);

	replay_btn.addEventListener('click', handleReplayClick, false);

	document.body.addEventListener('mouseout',  bgOutHandler, true);

	videoContainer.addEventListener('mouseover', bgOverHandler, true);

	
	intro_video.addEventListener('ended', videoComplete_intro, false);
	user_video.addEventListener('ended', videoComplete_user, false);

	vid_play.addEventListener('click', handlePlayClick);
	vid_pause.addEventListener('click', handlePauseClick);
	vid_sound.addEventListener('click', muteUnmuteHandler);
	vid_mute.addEventListener('click', muteUnmuteHandler);
	

}

function videoComplete_intro() {
	hideIntroPanel();
	showEndPanel();
	
}

function videoComplete_user() {
	hideUserPanel();
	showEndPanel();
}



function bgOverHandler() {
	if (user_video.style.display === "block") {
		
		video_controls.style.display = "block";

		
		TweenLite.to(video_controls, .25, {ease: Power2.easeOut, bottom:1});
				
	}
}

function bgOutHandler() {
	if (user_video.style.display === "block") {
		
		//video_controls.style.display = "none";
		TweenLite.to(video_controls, .25, {ease: Power2.easeOut, bottom:-25});		
	}
}

function showIntroPanel() {

	intro_video.style.display = "block";

}


function handleSkipIntroClick() {
	console.log("skip intro click");
	userInteraction = true;
	intro_video.removeEventListener('ended', videoComplete_intro, false);
	userSkipedToTrailer = true;
	hideIntroPanel();
	showUserPanel();
}



function handleCloseClick() { 
	userInteraction = true;
	hideUserPanel();
	showEndPanel();
}

function handleReplayClick() {
	userInteraction = true;
	//end_video.currentTime = 0;
	hideEndPanel();
	showUserPanel();
}

function hideIntroPanel() {

	studio.video.Reporter.detach('intro_video', intro_video);
	introSkip_btn.style.display 	= "none";
	intro_video.pause();
	intro_video.style.display 		= "none";
	intro_video.style.visibility	= "hidden";

}

function playUserVideo() {

	//attach tracking here

	if(user_video.currentTime){
		user_video.currentTime = 0.1;
	}

	user_video.volume = 1;
	setScrubber();

	$('.timeBar').css('width', '0%');
	
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach('user_video', user_video);
	});
	
	user_video.load();
	user_video.play();
}

function showUserPanel() { 

	

	user_panel.style.display 	= "block";
	close_btn.style.display 	= "block";
	user_video.style.display 	= "block";

	playUserVideo();

	video_controls.style.display 	= "block";

	vid_pause.style.display 				= "block";
	vid_play.style.display					= "none";
	vid_sound.style.display 				= "block";
	vid_mute.style.display					= "none";
	
	videoContainer.style.display			= "block";

	

}

function hideUserPanel() {
	user_panel.style.display 	= "none";
	close_btn.style.display 	= "none";
	user_video.style.display 	= "none";

	user_video.pause();

	video_controls.style.display 	= "none";

	videoContainer.style.display	= "none";


}

function showEndPanel() {


	replay_btn.style.display 				= "block";
	img_titleTreatment.style.display		= "block";
	img_text_fyc.style.display 				= "block";

	resolve_art.style.display				= "block";
	resolve_quote.style.display				= "block";


	showResolveAnimation();


}

function hideEndPanel() {

	replay_btn.style.display 			= "none";
	img_titleTreatment.style.display	= "none";
	img_text_fyc.style.display 			= "none";
	//end_video.style.display			= "none";

	resolve_art.style.display				= "none";
	resolve_quote.style.display				= "none";
}



function handlePlayClick() {

	vid_play.style.display 	= "none";
	vid_pause.style.display = "block";
	user_video.play();
}

function handlePauseClick() {
	//console.log("PAUSE user_video");

	vid_play.style.display 	= "block";
	vid_pause.style.display = "none";
	user_video.pause();
}


function muteUnmuteHandler() {
	if (user_video.volume == 0.0) {
       // If muted, then turn it on
       user_video.volume = 1.0;
       
       vid_sound.style.display 	= 'block';
       vid_mute.style.display 	= 'none';
   } else {
       // If unmuted, then turn it off
       user_video.volume = 0.0;
       
       vid_sound.style.display 	= 'none';
       vid_mute.style.display 	= 'block';
   }
}

/*---------------------------------*/
function showResolveAnimation() {
	
	console.log("END ANIMATION");

	animationIsDone = false;
	resetAnimation();

	resolve_fadeout.style.opacity	 	= 1;
	resolve_background.style.opacity 	= 1;
	resolve_background.style.display 	= "block";
	resolve_art.style.display			="block";

	if(timelineInitilized == false){
		//console.log("HERE -- timeline init");
		
		timelineInitilized = true;
		tl  = new TimelineMax({repeat:0, repeatDelay:0, onUpdate:updateStatus, onRepeat:updateReps, onComplete:setAnimationStatus});
		
		tl.to(	resolve_fadeout, 	0.5, 	{opacity:0, ease:Sine.easeOut})
			.to(	replay_btn, 	0.5, 	{opacity:1, ease:Sine.easeInOut}, '-=0.5')
			.to(	img_titleTreatment, 	1.0, 	{opacity:1, ease:Sine.easeInOut}, '-=0.5')
			.to(	img_text_fyc, 	1.0, 	{opacity:1, ease:Sine.easeInOut}, '-=0.5')
			.to(	resolve_quote, 	1.0, 	{opacity:1, ease:Sine.easeInOut}, '-=0.5')
			.to(	resolve_art, 1.0, {opacity:1, ease:Sine.easeInOut}, '-=0.5');
		
			

	} else {
		console.log("restart animation")
		tl.restart();
	}
}

function updateStatus() {}
function updateReps() {}
function setAnimationStatus() {}

function resetAnimation() {

	//resolve_fadeout.style.opacity	 		= 1;
	resolve_background.style.opacity		= 0;	
	img_text_fyc.style.opacity			= 0;
	img_titleTreatment.style.opacity 	= 0;

	resolve_art.style.opacity	= 0;
	resolve_quote.style.opacity = 0;
	replay_btn.style.opacity				= 0;

	resolve_fadeout.style.display 			= "block";	
	resolve_background.style.display 		= "block";	
	img_text_fyc.style.display 			= "block";
	img_titleTreatment.style.display 	= "block";
	replay_btn.style.display				= "block";
}

function showNoAnimation() {
	
	if(tl){
		tl.kill();
	}

	resolve_fadeout.style.opacity	 		= 0;
	resolve_background.style.opacity		= 1;	
	img_text_fyc.style.opacity			= 1;
	img_titleTreatment.style.opacity 	= 1;

	resolve_art.style.opacity	= 1;
	resolve_quote.style.opacity = 1;
	replay_btn.style.opacity				= 1;

	resolve_fadeout.style.display 			= "none";
	resolve_background.style.display 		= "block";	
	img_text_fyc.style.display 			= "block";
	img_titleTreatment.style.display 	= "block";
	
	replay_btn.style.display				= "block";

	animationIsDone     					= true;

}


/*--------------------------------*/
function setScrubber() {

	timer = setInterval(updateScrubber, 33);


}

function setScrubberProgress () {
	// Update the progress bar
	progWidth = ((seekBar.value*scrubberWidth)/100);
	vid_scrubber_progress.style.width = progWidth + "px";
}

/*----------------------------*/
/*UPDATE SCRUBBER*/
//VIDEO PROGRESS BAR
//when video timebar clicked
var timeDrag = false;	/* check for drag event */
$('.progress').on('mousedown', function(e) {
	timeDrag = true;
	updatebar(e.pageX);

});
$(document).on('mouseup', function(e) {
	if(timeDrag) {
		timeDrag = false;
		updatebar(e.pageX);
	}
});
$(document).on('mousemove', function(e) {
	if(timeDrag) {
		updatebar(e.pageX);
	}
});
var updatebar = function(x) {
	var progress = $('.progress');
	
	//calculate drag position
	//and update video currenttime
	//as well as progress bar
	var maxduration = user_video.duration;
	var position = x - progress.offset().left;
	var percentage = 100 * position / progress.width();
	

	if(percentage > 100) {
		percentage = 100;
	}
	if(percentage < 0) {
		percentage = 0;
	}
	$('.timeBar').css('width',percentage+'%');	
	var goToTime = maxduration * percentage / 100;
	user_video.currentTime = goToTime; 
};
	
function updateScrubber(){
	var nt = user_video.currentTime * (100 / user_video.duration);
	
	var perRound = Math.round(nt);
	//console.log("percentage  " + Math.round(nt) );	

	$('.timeBar').css('width',nt+'%');	
} 


mainInit();

