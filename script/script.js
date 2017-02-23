// cash
var doc = document;

// add event
$(document).ready(function() {
    
    $(window).on("orientationchange", mobile_version);
    
    $(window).on("resize", mobile_version);
    
    $(document).on("scroll", onScroll);
    
    $("a").click(function(e) {
        
        if($(this).attr("href").indexOf("#") === 0)
        {
            var hash = $(this).attr("href");
        
            var target = $(hash);

            $("html, body").animate( 
                {
                    scrollTop: target.offset().top
                }, 
                700, 
                function() 
                {
                    window.location.hash = hash;  
                }
            );
        }
        
        return true;
    });

    // more jobs
    if(($(".job-details-item").length > 2) && (window.innerWidth >= "720"))
    {   
        
        if($(".job-details-item").length > 3)
        {
            // add class
            $(".job-details-item").addClass("more-three");
        }
        else
        {
            // change style
            $(".job-details-item").css("width", "33%");
            $(".job-details-item").css("padding-left", "0");
        }
    }
    
    // check email
    $(".contact-us").on("blur", '.email-contact-us', checkEmail);
    
    // mobile resolution
    mobile_version();
    
});

// change active with scrolling
function onScroll() {
    
    var scroll_top = $(document).scrollTop();

    $(".menu-js a").each(function() {
        
        var hash = $(this).attr("href");
        
        var target = $(hash);
        
        if ((target.position().top <= scroll_top + (target.outerHeight())/2) && (target.offset().top + target.outerHeight() > scroll_top)) 
        {
            
            $("a.active").removeClass("active");
            
            $(this).addClass("active");
            
//            window.location.hash = hash;  
            
        } 
        else 
        {
            $(this).removeClass("active");
        }
    });
}

// check email
function checkEmail()
{
   // get entering data
    var email_value = $(this).val();

    // check reg
    var reg = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;
    var result = email_value.match(reg);
    
    // error
    if(!result)
    {
        if(!($("div").is(".error-message")))
        {
            $(this).parent().addClass('error');
            $(this).css("padding-left", "45px");
            $(this).parent().append('<div class="error-message">Invalid email address</div>');
        }
    }
    else 
    {
        $(this).parent().removeClass('error');
        $(this).css("padding-left", "10px");
        $(".error-message").remove();
    }
}

// change in mobile's version
function mobile_version()
{
    
    // check resolution for the mobile's version
    if($(window).width() <= 480)
    { 
        $(".menu-js").css("display", "none");
        
        // change menu's view
        if(!($("div").is("#icon_menu")))
        {
            // create and add icon
            $("#header").append("<div id='icon_menu'></div>");
            $("#icon_menu").on("click", show_menu);
        }
        
        
    }
    else if($(window).width() > 480 )
    {
        // icon is exist
        if($("div").is("#icon_menu"))
        { 
            // delete icon
            $("#icon_menu").remove();
            $(".menu-js").css("display", "inline-block");
        }
    }
}

// drop menu
function show_menu()
{
    // menu isn't show
    if(!($(".menu-js").hasClass("show_menu")))
    { 
        $(".menu-js").css("display", "inline-block");
        $(".menu-js").toggleClass("show_menu");
        $("#icon_menu").addClass("show_icon");
    }
    else
    {
        $(".menu-js").css("display", "none");
        $(".menu-js").toggleClass("show_menu");
        $("#icon_menu").removeClass("show_icon");
    }

}