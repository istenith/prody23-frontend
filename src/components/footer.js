import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div>
<footer class="footer-distributed">

			<div class="footer-left">

            <img class="iste" src="/static/media/Unknown-3.15cdcef820959a14d50b" alt="Logo"/>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Site</a>
				
					{/* <a href="#"></a> */}
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">ISTE NITH © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>ISTE</span> National Institute of Technology, Hamirpur</p>
				</div>

				{/* <div>
					<i class="fa fa-phone"></i>
					<p>+1.555.555.5555</p>
				</div> */}

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="istenith@gmail.com">istenith@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About ISTE NITH</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    </div>
  )
}

export default Footer;
