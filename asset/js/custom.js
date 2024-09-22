jQuery(document).ready(function ($) {

    // gsap animations
    // Banner sction
    function gsapBanner() {
        let gs_timeline = gsap.timeline();

        function breakBnnerTitle(){
            splittedBnnerTitle = $('#banner__title').text().split(' ');

            splittedText = '';
            splittedBnnerTitle.forEach(function(elem) {
                splittedText += `<span>${elem}</span>`
                console.log(splittedText);

                $('#banner__title').html(splittedText);
            });
            
        }
        breakBnnerTitle();

        gs_timeline.from('.header__logo', {
            y: -20,
            duration: 1,
            delay: 1,
            opacity: 0,
        });

        // gs_timeline = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.banner__title span',  // जिस एलिमेंट पर ट्रिगर करना है
        //         scroller: 'body',
        //         markers: true,              // मार्कर्स दिखाने के लिए
        //         start: "top 100%",           // एनिमेशन कब शुरू होनी चाहिए
        //         end: "top 10%",
        //         scrub: 2,            // एनिमेशन कब समाप्त होनी चाहिए
        //         // toggleActions: "play none none none",  // जब भी ट्रिगर होगा, प्ले होगा
        //     }
        // });

        gs_timeline.from('.banner__title span', {
            x: 50,
            duration: 1,
            opacity: 0,
            stagger: 0.4,
            // repeat: -1,
            // yoyo: true,
        });

        gsap.from('.banner__title', {
            scrollTrigger: {
                trigger: '.banner__title',  // ट्रिगर करने के लिए एलिमेंट
                scroller: 'body',
                markers: true,   
                start: "top 20%",        // कब शुरू होना चाहिए (टॉप से viewport का सेंटर)
                end: "top -50%",       // कब समाप्त होना चाहिए
                scrub: 2,
                // onEnter: function() {       // जब यूजर सेक्शन में प्रवेश करे
                //     gs_timeline.restart();  // एनिमेशन को फिर से शुरू करें
                // },
                onLeave: function() {       // जब यूजर सेक्शन से बाहर निकले
                    gs_timeline.pause(0);   // एनिमेशन को रोकें और प्रारंभिक स्थिति पर सेट करें
                },
                onEnterBack: function() {   // जब यूजर वापस स्क्रॉल करे
                    gs_timeline.restart();  // एनिमेशन को फिर से शुरू करें
                },
                // onLeaveBack: function() {   // जब यूजर सेक्शन को वापस छोड़कर बाहर जाए
                //     gs_timeline.pause(0);   // एनिमेशन को रोकें और प्रारंभिक स्थिति पर सेट करें
                // },
            }
        });
    }
    gsapBanner();
    // Banner sction

    // section the_rules
    function gsapRuleSec() {
        let gs_timeline = gsap.timeline();

        gsap.from('.the_rules_sec .shape_bg_green', {
            // y: -100,
            height: '0px',
            duration: 0.5,
            // stagger: 1,
            scrollTrigger: {
                trigger: '.the_rules_sec',
                scroller: 'body',
            },
        });
        gsap.from('.the_rules_sec .shape_bg_white', {
            // y: -100,
            height: '0px',
            duration: 0.1,
            delay: 0.5,
            // stagger: 1,
            scrollTrigger: {
                trigger: '.the_rules_sec',
                scroller: 'body',
            },
        });
        gsap.from('.the_rules_row .rule_speaker', {
            height: '0px',
            duration: 1,
            ease: "back.out(0.3)",
            opacity: 0,
            scrollTrigger: {
                trigger: '.the_rules_row',
                scroller: 'body',
            },
        });

        gsap.from('.the_rules_row', {
            y: 60,
            duration: 1.5,
            ease: "back.out(1.7)",
            opacity: 0,
            scrollTrigger: {
                trigger: '.the_rules_row',
                scroller: 'body',
                // markers: true,
                start: 'top 70%',
                // end: 'top 20%',
                // scrub: 2,
                // pin: true,
            },
        });
        gsap.from('.the_rules_row .shape_circle_2', {
            x: -222,
            duration: 1.5,
            ease: "back.out(1.7)",
            opacity: 0,
            scrollTrigger: {
                trigger: '.the_rules_row',
                scroller: 'body',
                // markers: true,
                start: 'top 70%',
                // end: 'top 20%',
                // scrub: 2,
                // pin: true,
            },
        });
       
        
        gsap.from('.the_rules_row .block__text', {
            duration: 1.5,
            scrollTrigger: {
                trigger: '.the_rules_row',
                scroller: 'body',
                // markers: true,
                // start: "top center",
                // end: "bottom top",
                onEnter: function() {
                    $('.the_rules_row .block__text').addClass('active_anim');
                },
                onLeave: function() {
                    $('.the_rules_row .block__text').removeClass('active_anim');
                },
                onLeaveBack: function() { // जब एलिमेंट स्क्रॉल करके वापस आए
                    $('.the_rules_row .block__text').removeClass('active_anim');
                },
            },
        });
        
    }
    gsapRuleSec();
    // section the_rules

    // document close
});