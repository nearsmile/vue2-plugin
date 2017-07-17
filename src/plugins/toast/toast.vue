<template>
	<transition name="toast-pop">
		<div class="toast" v-show="visible" :class="customClass" :style="{'padding': iconClass === '' ? '10px' : '20px'}">
			<i class="toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
			<span class="toast-text" :style="{'padding-top': iconClass === '' ? '0' : '10px'}">
				{{ message }}
			</span>
		</div>
	</transition>
</template>
<script>
	export default {
		name: 'toast',

		props: {
			message: String,

			className: {
				type: String,
				default: ''
			},

			position: {
				type: String,
				default: 'middle'
			},

			iconClass: {
				type: String,
				default: ''
			}
		},

		data() {
			return {
				visible: false
			}
		},

		computed: {
			customClass() {
				let classes = [];
				switch (this.position) {
					case 'top':
						classes.push('is-top');
						break;
					case 'middle': 
						classes.push('is-middle');
						break;
					default:
						classes.push('is-bottom');
				}
				classes.push(this.className);
				
				return classes.join(' ');
			}

		}
	}
</script>
<style>
	
.toast {
	position: fixed;
	max-width: 80%;
	box-sizing: border-box;
	border-radius: 5px;
	color: #fff;
	text-align: center;
	z-index: 1000;
	transition: opacity .3s linear;
	background-color: rgba(0, 0, 0, .65);
}

.toast-icon {
	display: block;
	text-align: center;
	font-size: 56px;
}

.toast-text {
	display: block;
	font-size: 14px;
	text-align: center;
}

.is-top {
	top: 50px;
	left: 50%;
	transform: translate3d(-50%, 0, 0);
}

.is-middle {
	left: 50%;
	top: 50%;
	transform: translate3d(-50%, -50%, 0);
}

.is-bottom {
	bottom: 50px;
	left: 50%;
	transform: translate3d(-50%, 0, 0);
}

.toast-pop-enter, 
.toast-pop-leave-active {
	opacity: 0;
}

</style>