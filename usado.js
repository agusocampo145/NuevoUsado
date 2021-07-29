document.getElementById("defaultOpen").click();
    $(document).ready(function() {
      $('.top a').click(function(e) {
        e.preventDefault();
        var offset = $($(this).attr('href')).offset().top;
        $('html, body').animate({
          scrollTop: offset
        }, 600);
        return false;
      });
    });
      function openTab(evt, pestania) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(pestania).style.display = "block";
        evt.currentTarget.className += " active";
      }

      $(document).ready(function() {
			$('.top a').click(function(e) {
				e.preventDefault();
				var offset = $($(this).attr('href')).offset().top;
				$('html, body').animate({
					scrollTop: offset
				}, 600);
				return false;
			});

		});