
			const add = document.querySelector(".add");
			const resetCount = document.querySelector(".reset");
			const sub = document.querySelector(".minus");
			
			add.addEventListener("click", () => {
				count.innerHTML++;
				setColor();
			});

			sub.addEventListener("click", () => {
				count.innerHTML--;
				setColor();
			});
			resetCount.addEventListener("click", () => {
				count.innerHTML = 0;
				setColor();
			});

			function setColor() {
				if (count.innerHTML > 0) {
					count.style.color = "#fff";
				} else if (count.innerHTML < 0) {
					count.style.color = "orangered";
				} else {
					count.style.color = "#000";
				}
			}
