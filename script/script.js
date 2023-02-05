$('body').css('overflow','hidden');
function randomphoto(){
fetch(`https://source.unsplash.com/random`)
	.then((data) => {
	  console.log(data);
	  let imageUrl = data.url;
	  let xInterval = 0;
	  let arrImg = [];

	

	  let randNum =  Math.floor(Math.random() * 11) + 1;
	

	  let randomPhoto = setInterval(() => {
	fetch(`https://source.unsplash.com/random`)
	.then((data) => {
	  let imageUrl = data.url;
	  xInterval++;
	  arrImg.push(imageUrl);
	  if(xInterval == 12){
		clearInterval(randomPhoto);
	  }



	if(arrImg.length == 12){
	$('.img1').css('background-image', `url(${arrImg[0]})`);
	$('.img2').css('background-image', `url(${arrImg[1]})`);
	$('.img3').css('background-image', `url(${arrImg[randNum]})`);
	$('.img4').css('background-image', `url(${arrImg[3]})`);
	$('.img5').css('background-image', `url(${arrImg[4]})`);
	$('.img6').css('background-image', `url(${arrImg[5]})`);
	$('.img7').css('background-image', `url(${arrImg[6]})`);
	$('.img8').css('background-image', `url(${arrImg[7]})`);
	$('.img9').css('background-image', `url(${arrImg[8]})`);
	$('.img10').css('background-image', `url(${arrImg[9]})`);
	$('.img11').css('background-image', `url(${arrImg[10]})`);
	$('.img12').css('background-image', `url(${arrImg[11]})`);
	$(".loding").hide();
	$('body').css('overflow','auto');

	}



	

	});



}, 120)

		
$(".button__refresh").hide();
});
}

randomphoto();


$(".check").click(function () { 
	$(this).addClass("check__active");
	$(".wrap__titel").text("Find the same pictures")

	setTimeout(() => {
		$(".check").removeClass("check__active");

		setTimeout(() => {
			$(".card1").addClass("flip");
		  }, 100)
		  setTimeout(() => {
			$(".card2").addClass("flip");
		  }, 150)
		  setTimeout(() => {
			$(".card3").addClass("flip");
		  }, 200)
		  setTimeout(() => {
			$(".card4").addClass("flip");
		  }, 250)
		  setTimeout(() => {
			$(".card5").addClass("flip");
		  }, 300)
		  setTimeout(() => {
			$(".card6").addClass("flip");
		  }, 350)
		  setTimeout(() => {
			$(".card7").addClass("flip");
		  }, 400)
		  setTimeout(() => {
			$(".card8").addClass("flip");
		  }, 450)
		  setTimeout(() => {
			$(".card9").addClass("flip");
		  }, 500)
		  setTimeout(() => {
			$(".card10").addClass("flip");
		  }, 550)
		  setTimeout(() => {
			$(".card11").addClass("flip");
		  }, 600)
		  setTimeout(() => {
			$(".card12").addClass("flip");
		  }, 650)
		  $(".button__check").hide();
		  $(".button__refresh").show();



	  }, 1000)


		
});


let similarCard = [];
let shapeCLasses = [];
let flipnum = 3;
let clicknum = 0;
$(".card").click(function () { 
	$(".card").removeClass("shake");

	var bg = $(this).find(".front-view").css('background-image');
	bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
	let myClass = $(this).attr("class");
	let mycardClass = myClass.slice(5);
	let mycardClassN = mycardClass.slice(0,6);
	shapeCLasses.push(mycardClassN);


	clicknum++;
	similarCard.push(bg);
	$(this).removeClass("flip");
	if(clicknum == 2){
		clicknum = 0;
		flipnum--;
		$("#flip").text(flipnum);
		console.log(similarCard);
		setTimeout(() => {
			$(".card").addClass("flip");
		  }, 1000)
		if(similarCard[0] == similarCard[1]){
			console.log("true")
			similarCard.splice(0, similarCard.length);
			shapeCLasses.splice(0, shapeCLasses.length);
			$(".button__refresh").hide();
			$(".button__check").show();
			flipnum = 3;
			$("#flip").text(flipnum);
			randomphoto();
			setTimeout(() => {
			$(".card").removeClass("flip");
			$(".wrap__titel").text("You not a robot");

		  }, 1000)


		}else{
			console.log("false")
			similarCard.splice(0, similarCard.length);
			setTimeout(() => {
			$("."+shapeCLasses[0]).addClass("shake");
			$("."+shapeCLasses[1]).addClass("shake");
			 }, 400)
			 setTimeout(() => {
				shapeCLasses.splice(0, shapeCLasses.length);
			}, 450)
		

			if(flipnum == 0){
				$(".button__refresh").hide();
				$(".button__check").show();
				flipnum = 3;
				$("#flip").text(flipnum);
				randomphoto();
			setTimeout(() => {
				$(".card").removeClass("flip");
				$(".wrap__titel").text("Sorry you lose")

			  }, 1000)



			}

		}

	}





});



$(".check__ref").click(function () { 
	$(".button__refresh").hide();
	$(".button__check").show();
	flipnum = 3;
	$("#flip").text(flipnum);
	randomphoto();
	$(this).addClass("check__ref__active");
	setTimeout(() => {
		$(".check__ref").removeClass("check__ref__active");

		setTimeout(() => {
			$(".card1").removeClass("flip");
		  }, 100)
		  setTimeout(() => {
			$(".card2").removeClass("flip");
		  }, 150)
		  setTimeout(() => {
			$(".card3").removeClass("flip");
		  }, 200)
		  setTimeout(() => {
			$(".card4").removeClass("flip");
		  }, 250)
		  setTimeout(() => {
			$(".card5").removeClass("flip");
		  }, 300)
		  setTimeout(() => {
			$(".card6").removeClass("flip");
		  }, 350)
		  setTimeout(() => {
			$(".card7").removeClass("flip");
		  }, 400)
		  setTimeout(() => {
			$(".card8").removeClass("flip");
		  }, 450)
		  setTimeout(() => {
			$(".card9").removeClass("flip");
		  }, 500)
		  setTimeout(() => {
			$(".card10").removeClass("flip");
		  }, 550)
		  setTimeout(() => {
			$(".card11").removeClass("flip");
		  }, 600)
		  setTimeout(() => {
			$(".card12").removeClass("flip");
		  }, 650)
	  }, 2000)

});
