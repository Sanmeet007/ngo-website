

$(document).ready(function () {
  const check = document.querySelectorAll('.item');

  const options = {

    root: null,
    threshold: 0,
    rootMargin: "300px 0px 0px 0px"
  };

  var observer = new IntersectionObserver(function(entries, observer) {

    entries.forEach(entry => {
      if (entry.isIntersecting == true) {

        // $(entry.target).css('filter' , 'blur(20px)')
        // $(entry.target).animate({opacity:'1' })

        $(entry.target).css('opacity', '1')
        $(entry.target).css('transform', 'scale(1)')

        //For Debug Only
        //  console.log('i was observed')


        observer.unobserve(entry.target);

      }
    });

  }, options);

  check.forEach(fader => {
    observer.observe(fader)
  });

  //

  const LeftRight = document.querySelectorAll('.position');

  const NewOptions = {

    root: null,
    threshold: 0.1
  };

  var PositionObserver = new IntersectionObserver(function(entries,
    PositionObserver) {

    entries.forEach(entry => {
      if (entry.isIntersecting == true) {


        // $(entry.target).animate({ })

        $(entry.target).css('opacity', '1');

        $('.left').css('left', '0%')
        $('.right').css('left', '0%')


        //For Debug Only
        //    console.log('i was observed')


        PositionObserver.unobserve(entry.target);

      }
    });

  }, NewOptions);

  LeftRight.forEach(pos => {
    PositionObserver.observe(pos)
  });
});



// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Help", "Better Life", "Shelter"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


const counters = document.querySelectorAll('.counter');
const counterGrid = document.getElementById('cG');
const speed = 50;



CounterObserver = new IntersectionObserver(function(entry, CounterObserver) {
    
  if (entry[0].isIntersecting == true) {
    
   
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = Math.ceil(target / speed);

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});	
    CounterObserver.unobserve(counterGrid);
  }

},{});

CounterObserver.observe(counterGrid)