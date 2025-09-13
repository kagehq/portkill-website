<template>
	<div class="bg-gray-500/10 border-gray-500/15 border min-w-2xl rounded-xl mx-auto relative">
		<div class="w-full p-4 flex items-center space-x-6">
			<a
				href="/"
				class="flex items-center justify-center"
				aria-current="page"
			>
				<div class="w-8 h-8 flex items-center justify-center rounded-sm">
					<img
						class="w-full h-full object-contain rounded-sm"
						src="/assets/img/stripe.png"
						alt="Stripe logo"
					/>
					<!-- <svg class="w-full h-full" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/>
					</svg> -->
				</div>
			</a>
			<div class="">
				<h1 class="font-semibold text-base text-white md:text-lg">
					Welcome to our Team
				</h1>
				<p
					class="text-sm leading-5 text-ob-gray-color"
				>
					Configure the required env vars to run this application.
				</p>
			</div>
		</div>
		<form>
			<div class="w-full border-t border-b border-gray-500/15 p-4 py-6">
				<div class="header-row grid grid-cols-2 gap-3 items-center w-full text-sm text-white font-medium pb-1">
					<div>Key</div>
					<div>Value</div>
				</div>
				<div class="">
					<div class="grid grid-cols-2 gap-3 items-center w-full group">
						<div class="relative">
							<input
								type="text"
								value="DATABASE_URL"
								class="px-3 block w-full font-mono rounded-md border border-gray-500/15 bg-gray-500/5 py-1.5 focus:outline-0 text-white text-xs sm:leading-6"
								placeholder="ENV_KEY"
								disabled
							/>
							<span class="absolute -top-2 right-2 font-medium rounded-full bg-[#152b4e] text-blue-300 px-1.5 py-0.5 leading-3 text-[8px] uppercase">Required</span>
						</div>
						<div class="flex items-center w-full">
							<div class="flex items-center w-full bg-gray-500/5 border-gray-500/15 border rounded-md">
								<input
									type="text"
									class="w-full px-3 py-1.5 font-mono border sm:leading-6 text-xs text-white bg-transparent placeholder:text-gray-500 border-none focus:outline-none focus:ring-0 focus:border-none"
									placeholder="Enter value"
								/>
							</div>
						</div>
						<div class="relative">
							<input
								type="text"
								value="API_KEY"
								class="px-3 block w-full font-mono rounded-md border border-gray-500/15 bg-gray-500/5 py-1.5 focus:outline-0 text-white text-xs sm:leading-6"
								placeholder="ENV_KEY"
								disabled
							/>
							<span class="absolute -top-2 right-2 font-medium rounded-full bg-[#152b4e] text-blue-300 px-1.5 py-0.5 leading-3 text-[8px] uppercase">Required</span>
						</div>
						<div class="flex items-center w-full">
							<div class="flex items-center w-full bg-gray-500/5 border-gray-500/15 border rounded-md">
								<input
									type="text"
									class="w-full px-3 py-1.5 font-mono border sm:leading-6 text-xs text-white bg-transparent placeholder:text-gray-500 border-none focus:outline-none focus:ring-0 focus:border-none"
									placeholder="Enter value"
								/>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="relative w-full grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-6">
					<div class="sm:col-span-3">
						<label
							for="keyname"
							class="block text-sm font-medium leading-6 text-white"
							>DATABASE_URL</label
						>
						<div class="mt-2">
							<input
								id="keyname"
								name="keyname"
								type="text"
								autocomplete="off"
								required
								placeholder="Enter DATABASE_URL"
								class="px-3 block w-full font-mono rounded-md border border-gray-500/15 bg-gray-500/5 py-1.5 focus:outline-0 text-white text-xs sm:leading-6"
							/>
						</div>
					</div>
					<div class="sm:col-span-3">
						<label
							for="key-value"
							class="block text-sm font-medium leading-6 text-white"
							>API_KEY</label
						>
						<div class="mt-2">
							<input
								id="key-value"
								name="key-value"
								type="text"
								placeholder="Enter API_KEY"
								autocomplete="off"
								required
								class="px-3 block w-full font-mono rounded-md border border-gray-500/15 bg-gray-500/5 py-1.5 focus:outline-0 text-white text-xs sm:leading-6"
							/>
						</div>
					</div>
				</div> -->
			</div>
			<div class="p-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
				<button
					type="submit"
					class="w-full md:flex-1 flex items-center space-x-3 justify-center min-w-fit border border-gray-500/15 rounded-md cursor-pointer bg-transparent px-3 py-2 text-sm font-medium leading-6 text-white hover:bg-gray-500/10 focus:outline-0 order-3 md:order-1"
				>
					<div class="w-5 h-5 flex items-center justify-center rounded-sm import-icon">
						<template v-if="currentProvider.iconType === 'svg'">
							<div v-html="currentProvider.icon" class="w-full h-full [&>svg]:w-full [&>svg]:h-full"></div>
						</template>
						<img
							v-else
							:src="currentProvider.icon"
							:alt="currentProvider.name"
							class="w-full h-full object-contain rounded-sm transition-opacity duration-200"
						/>
					</div>
					<span class="import-text transition-opacity duration-200">
						Import from {{ currentProvider.name }}
					</span>
				</button>
				<div class="text-gray-400/50 font-medium text-sm my-2 md:my-0 shrink-0 order-2 md:order-2">OR</div>
				<button
					type="submit"
					class="w-full md:flex-1 flex justify-center min-w-fit rounded-md cursor-pointer border border-transparent bg-blue-300 px-8 py-2 text-sm font-medium leading-6 text-black hover:bg-blue-400 focus:outline-0 order-1 md:order-3"
				>
					Continue
				</button>
			</div>
		</form>
		<a
			href="https://kagehq.com"
			target="_blank"
			class="flex flex-row -rotate-90 translate-y-40 items-center justify-start origin-bottom-left py-1 px-3 gap-1.5 rounded-b-none border border-gray-500/15 border-b-0 absolute left-0 -ml-[1.2px] top-4 rounded-lg bg-gray-500/10"
		>
			<span class="text-[10px] font-bold text-ob-gray-color">Powered by</span>
			<div class="text-blue-300 text-xs font-bold font-mono">
				<img
					class="inline-block h-4"
					:src="kagePoweredLogo"
					alt=""
				/>
			</div>
		</a>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const providers = [
	{
		name: 'Onboardbase',
		iconType: 'svg',
		icon: `<svg viewBox="0 0 512 512" fill="none"className="size-4"  xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1220_475)">
<rect width="512" height="512" rx="10" fill="black"/>
<path d="M527.515 29.5133L509.931 41.8258C492.347 53.9539 457.18 78.8557 422.012 76.2272C386.844 73.7831 351.677 44.2699 316.509 46.714C281.341 49.3425 246.174 83.4672 211.006 88.5398C175.838 93.6123 140.671 68.7105 105.503 56.5825C70.3353 44.2699 35.1677 44.2699 17.5838 44.2699H0V3.8147e-05L17.5838 3.8147e-05C35.1677 3.8147e-05 70.3353 3.8147e-05 105.503 3.8147e-05C140.671 3.8147e-05 175.838 3.8147e-05 211.006 3.8147e-05C246.174 3.8147e-05 281.341 3.8147e-05 316.509 3.8147e-05C351.677 3.8147e-05 386.844 3.8147e-05 422.012 3.8147e-05C457.18 3.8147e-05 492.347 3.8147e-05 509.931 3.8147e-05H527.515V29.5133Z" fill="#6772E5"/>
<path d="M0 484.727L17.0667 472.752C34.1333 460.957 68.2667 436.739 102.4 439.295C136.533 441.672 170.667 470.375 204.8 467.998C238.933 465.442 273.067 432.254 307.2 427.321C341.333 422.387 375.467 446.606 409.6 458.401C443.733 470.375 477.867 470.375 494.933 470.375H512V513.43H494.933C477.867 513.43 443.733 513.43 409.6 513.43C375.467 513.43 341.333 513.43 307.2 513.43C273.067 513.43 238.933 513.43 204.8 513.43C170.667 513.43 136.533 513.43 102.4 513.43C68.2667 513.43 34.1333 513.43 17.0667 513.43H0V484.727Z" fill="#F5BE58"/>
<rect width="34.7108" height="196.795" transform="matrix(0.983621 0.180249 -0.189433 0.981894 132.901 160)" fill="#6772E5"/>
<rect width="34.7108" height="196.795" transform="matrix(0.983775 0.179408 -0.190319 0.981722 202.394 165.618)" fill="#F5BE58"/>
<path d="M340.4 369.8C388 369.8 430.4 332.6 430.4 268.2C430.4 203 388 165.8 340.4 165.8C292.8 165.8 250.4 203 250.4 268.2C250.4 332.6 292.8 369.8 340.4 369.8ZM340.4 342.6C307.2 342.6 284.4 312.6 284.4 268.2C284.4 223.4 307.2 193 340.4 193C374 193 396.4 223.4 396.4 268.2C396.4 312.6 374 342.6 340.4 342.6Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1220_475">
<rect width="512" height="512" rx="10" fill="white"/>
</clipPath>
</defs>
</svg>
`
	},
	{
		name: '.env',
		iconType: 'svg',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#93c5fd" className="size-4">
			<path fillRule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clipRule="evenodd" />
		</svg>`
	},
	{
		name: 'Vault',
		iconType: 'svg',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#ffd814" d="m0 1.953 63.76 124.094L128 1.953Zm53.841 49.254H43.684V41.06H53.84zm0-15.227H43.684V25.822H53.84ZM69.08 66.444H58.97V56.286h10.108zm0-15.237H58.97V41.06h10.108zm0-15.227H58.97V25.822h10.108Zm15.147 15.227H74.027V41.06h10.159ZM74.027 35.98V25.822h10.159V35.98z"/></svg>`
	},
	{
		name: 'Dotenv',
		iconType: 'svg',
		icon: `<svg role="img" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g><path fill="#ECD53F" d="M0 0h200v200H0z"></path><path fill="#000" d="M31 164h14v14H31z"></path><g fill="#000" fill-rule="nonzero"><path d="M91.986 178.41v-7.75H66.288v-12.52h23.094v-7.75H66.288v-10.198h24.82v-7.782H57v46zM108.585 178.41v-29.997l18.545 29.997h9.319v-46h-8.63v30.72l-18.826-30.72h-9.037v46zM167.92 178.41l16.474-46h-9.852l-11.265 34.045-11.641-34.045h-10.073l16.442 46z"></path></g></g></svg>`
	},
	{
		name: '1password',
		iconType: 'svg',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 63.6 63.6" style="enable-background:new 0 0 63.6 63.6;" xml:space="preserve">
 <style type="text/css">
  .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#1A8CFF;}
	.st2{opacity:0.5;enable-background:new    ;}
	.st3{fill-rule:evenodd;clip-rule:evenodd;fill-opacity:5.244755e-02;}
	.st4{opacity:0.2561;enable-background:new    ;}
	.st5{fill-opacity:0.25;}
	.st6{fill-rule:evenodd;clip-rule:evenodd;fill:#F7F7F7;}
	.st7{fill-rule:evenodd;clip-rule:evenodd;fill-opacity:5.000000e-02;}
	.st8{fill:#FFFFFF;}
	.st9{fill-opacity:0.15;}
	.st10{fill-rule:evenodd;clip-rule:evenodd;fill:#0A2D4D;}
	.st11{fill-opacity:0.4;}
 </style>
 <metadata>
  <sfw xmlns="ns_sfw;">
   <slices>
   </slices>
   <sliceSourceBounds bottomLeftOrigin="true" height="63.6" width="63.6" x="230.9" y="0">
   </sliceSourceBounds>
  </sfw>
 </metadata>
 <g id="_x31_Password-wordmark-_x2F_-Black_x2C_-detailed-icon-_x2F_-1P-wordmark">
  <g id="_x31_Password-logo-2020-_x2F_-coloured-_x2F_-light-bg-_x2F_-116px" transform="translate(421.000000, 12.000000)">
   <g>
    <g id="lock">
     <g id="Chrome">
      <path id="chrome" class="st0" d="M-419.9,19.8c0,17,13.7,30.7,30.7,30.7s30.7-13.7,30.7-30.7s-13.7-30.7-30.7-30.7
						S-419.9,2.8-419.9,19.8z">
      </path>
      <path id="color" class="st1" d="M-389.2-4.3c13.3,0,24.1,10.8,24.1,24.1s-10.8,24.1-24.1,24.1c-13.3,0-24.1-10.8-24.1-24.1
						C-413.4,6.5-402.5-4.3-389.2-4.3">
      </path>
      <path id="chrome_1_" class="st2" d="M-421,19.8c0,17.6,14.2,31.8,31.8,31.8c17.6,0,31.8-14.2,31.8-31.8S-371.6-12-389.2-12
						C-406.8-12-421,2.2-421,19.8L-421,19.8z M-419.9,19.8L-419.9,19.8c0-17,13.7-30.7,30.7-30.7s30.7,13.8,30.7,30.7
						c0,17-13.7,30.7-30.7,30.7S-419.9,36.8-419.9,19.8L-419.9,19.8z">
      </path>
      <path id="shadows" class="st3" d="M-358.6,18.1c0,0.5,0,1.1,0,1.6c0,17-13.7,30.7-30.7,30.7s-30.6-13.6-30.6-30.6
						c0-0.6,0-1.1,0-1.6c0.9,16.2,14.3,29.1,30.7,29.1c16.3,0,29.6-12.7,30.6-28.7L-358.6,18.1z M-389.2-7.6
						c14.8,0,26.9,12,26.9,26.9c0,8.3-3.8,15.7-9.7,20.6c4.9-4.6,8-11.2,8-18.5c0-13.9-11.3-25.2-25.2-25.2
						c-13.9,0-25.2,11.3-25.2,25.2c0,7.3,3.1,13.8,8,18.5c-5.9-4.9-9.7-12.3-9.7-20.6C-416.1,4.4-404.1-7.6-389.2-7.6z">
      </path>
     </g>
     <path id="inside-shadow-outer" class="st4" d="M-389.2-4.3c13.3,0,24.1,10.8,24.1,24.1s-10.8,24.1-24.1,24.1
					c-13.2,0-23.9-10.6-24.1-23.7v-0.4C-413.4,6.5-402.6-4.3-389.2-4.3z M-389.2-3.2c-12.7,0-23,10.3-23,23s10.3,23,23,23
					c12.7,0,23-10.3,23-23S-376.5-3.2-389.2-3.2z">
     </path>
     <path id="inside-shadow" class="st5" d="M-389.1,0.6c-10.7,0-19.3,8.6-19.3,19.3c0,10.5,8.6,19.1,19.3,19.1
					c10.5,0,19.1-8.6,19.1-19.1C-370,9.2-378.6,0.6-389.1,0.6z M-389.1,1.7c9.9,0,18,8.1,18,18.2c0,9.9-8.1,18-18,18
					c-10.1,0-18.2-8.1-18.2-18C-407.3,9.8-399.2,1.7-389.1,1.7z">
     </path>
     <path id="inside" class="st6" d="M-389.1,1.7c9.9,0,18,8.1,18,18.2c0,9.9-8.1,18-18,18c-10.1,0-18.2-8.1-18.2-18
					C-407.3,9.8-399.2,1.7-389.1,1.7L-389.1,1.7z">
     </path>
     <g id="bevel" transform="translate(41.000000, 41.000000)">
      <path class="st7" d="M-422-21.2c0,4.5-3.7,8.2-8.2,8.2s-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2S-422-25.7-422-21.2z">
      </path>
      <path id="bevel-outside" class="st8" d="M-430.2-30.5c-5.1,0-9.3,4.2-9.3,9.3s4.2,9.3,9.3,9.3c5.1,0,9.3-4.2,9.3-9.3
						S-425.1-30.5-430.2-30.5z M-430.2-29.4c4.5,0,8.2,3.7,8.2,8.2s-3.7,8.2-8.2,8.2s-8.2-3.7-8.2-8.2S-434.8-29.4-430.2-29.4z">
      </path>
      <path id="bevel-inside" class="st9" d="M-430.2-29.4c4.5,0,8.2,3.7,8.2,8.2s-3.7,8.2-8.2,8.2s-8.2-3.7-8.2-8.2
						S-434.8-29.4-430.2-29.4z M-430.2-28.3c-3.9,0-7.1,3.2-7.1,7.1s3.2,7.1,7.1,7.1c3.9,0,7.1-3.2,7.1-7.1S-426.3-28.3-430.2-28.3z
						">
      </path>
     </g>
    </g>
    <g id="keyhole" transform="translate(48.000000, 32.000000)">
     <path id="keyhole-outer" class="st8" d="M-434.2-26.5h-6.1c-1.4,0-2.4,1.2-2.4,2.6v5.9c0,0.5,0.2,1.1,0.5,1.4l0.9,1v0.1l-0.9,1
					c-0.4,0.4-0.5,0.9-0.5,1.4v12.5c0,1.4,1.1,2.6,2.4,2.6h6.1c1.4,0,2.4-1.2,2.4-2.6v-5.9c0-0.5-0.2-1.1-0.5-1.4l-0.9-1V-9l0.9-1
					c0.4-0.4,0.5-0.9,0.5-1.4v-12.4C-431.7-25.3-432.8-26.5-434.2-26.5z M-434.2-25.3c0.8,0,1.4,0.7,1.4,1.6v12.3
					c0,0.3-0.1,0.5-0.3,0.7l-0.9,1c-0.4,0.4-0.4,1.1,0,1.5l0.9,1c0.2,0.2,0.3,0.5,0.3,0.7v5.9c0,0.9-0.6,1.6-1.4,1.6h-6
					c-0.8,0-1.4-0.7-1.4-1.6v-12.3c0-0.3,0.1-0.5,0.3-0.7l0.9-1c0.4-0.4,0.4-1.1,0-1.5l-0.9-1c-0.2-0.2-0.3-0.5-0.3-0.7v-5.9
					c0-0.9,0.6-1.6,1.4-1.6H-434.2z">
     </path>
     <path class="st10" d="M-441.6-17.9v-5.9c0-0.9,0.6-1.6,1.4-1.6h6c0.8,0,1.4,0.7,1.4,1.6v12.3c0,0.3-0.1,0.5-0.3,0.7l-0.9,1
					c-0.4,0.4-0.4,1.1,0,1.5l0.9,1c0.2,0.2,0.3,0.5,0.3,0.7v5.9c0,0.9-0.6,1.6-1.4,1.6h-6c-0.8,0-1.4-0.7-1.4-1.6v-12.2
					c0-0.3,0.1-0.5,0.3-0.7l0.9-1c0.4-0.4,0.4-1.1,0-1.5l-0.9-1C-441.5-17.3-441.6-17.6-441.6-17.9z">
     </path>
     <path id="keyhole-shadow" class="st11" d="M-434.2-25.4c0.8,0,1.4,0.7,1.4,1.6v12.3c0,0.3-0.1,0.5-0.3,0.7l-0.9,1
					c-0.4,0.4-0.4,1.1,0,1.5l0.9,1c0.2,0.2,0.3,0.5,0.3,0.7v5.9c0,0.9-0.6,1.6-1.4,1.6h-6c-0.8,0-1.4-0.7-1.4-1.6v-12.2
					c0-0.3,0.1-0.5,0.3-0.7l0.9-1c0.4-0.4,0.4-1.1,0-1.5l-0.9-1c-0.2-0.2-0.3-0.5-0.3-0.7v-5.9c0-0.9,0.6-1.6,1.4-1.6h6V-25.4z
					 M-434.4-24.2h-5.7c-0.2,0-0.4,0.2-0.5,0.5v0.1v5.8l0,0l0,0l0.9,1c0.7,0.8,0.7,2,0.1,2.8l-0.1,0.1l-0.9,1l0,0l0,0v12.2
					c0,0.3,0.2,0.5,0.4,0.6l0,0h5.7c0.2,0,0.4-0.2,0.5-0.5v-0.1v-5.8l0,0l0,0l-0.9-1c-0.7-0.8-0.7-2-0.1-2.8l0.1-0.1l0.9-1l0,0l0,0
					v-12.2C-433.9-24-434.1-24.2-434.4-24.2L-434.4-24.2z">
     </path>
    </g>
   </g>
  </g>
 </g>
</svg>`
	},
	{
		name: 'Vercel',
		iconType: 'svg',
		icon: `<svg class="w-full h-full" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/>
					</svg>`
	},
	{
		name: 'AWS',
		iconType: 'svg',
		icon: `<svg viewBox="0 0 74 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7348 16.5323C20.7348 17.4377 20.8327 18.1719 21.004 18.7102C21.1998 19.2486 21.4445 19.8359 21.7871 20.4722C21.9095 20.668 21.9584 20.8638 21.9584 21.0351C21.9584 21.2798 21.8116 21.5245 21.4935 21.7692L19.9517 22.797C19.7315 22.9438 19.5113 23.0173 19.3155 23.0173C19.0708 23.0173 18.826 22.8949 18.5813 22.6747C18.2387 22.3076 17.9451 21.916 17.7004 21.5245C17.4556 21.1085 17.2109 20.6435 16.9417 20.0807C15.0329 22.3321 12.6347 23.4577 9.74705 23.4577C7.69143 23.4577 6.05183 22.8704 4.85271 21.6958C3.6536 20.5211 3.04181 18.955 3.04181 16.9972C3.04181 14.9171 3.77596 13.2286 5.26873 11.9561C6.76151 10.6835 8.74371 10.0473 11.2643 10.0473C12.0963 10.0473 12.9528 10.1207 13.8583 10.243C14.7637 10.3654 15.6937 10.5612 16.6725 10.7814V8.99498C16.6725 7.13513 16.281 5.83813 15.5224 5.07951C14.7393 4.32089 13.4178 3.95381 11.5335 3.95381C10.677 3.95381 9.796 4.0517 8.89054 4.27194C7.98509 4.49219 7.10411 4.76138 6.2476 5.10398C5.85605 5.27528 5.56239 5.37317 5.39109 5.42211C5.21979 5.47106 5.09743 5.49553 4.99954 5.49553C4.65694 5.49553 4.48564 5.25081 4.48564 4.73691V3.53779C4.48564 3.14625 4.53458 2.85259 4.65694 2.68128C4.7793 2.50998 4.99954 2.33868 5.34215 2.16738C6.19866 1.72689 7.22647 1.35981 8.42558 1.06615C9.62469 0.74802 10.8972 0.601189 12.2432 0.601189C15.1553 0.601189 17.2843 1.26192 18.6547 2.5834C20.0007 3.90487 20.6859 5.91155 20.6859 8.60343V16.5323H20.7348ZM10.7993 20.252C11.6069 20.252 12.4389 20.1051 13.3199 19.8115C14.2009 19.5178 14.984 18.9794 15.6447 18.2453C16.0363 17.7803 16.3299 17.2664 16.4768 16.6791C16.6236 16.0918 16.7215 15.3821 16.7215 14.5501V13.5222C16.0118 13.3509 15.2532 13.2041 14.4701 13.1062C13.687 13.0083 12.9284 12.9594 12.1698 12.9594C10.5301 12.9594 9.33103 13.2775 8.52347 13.9383C7.7159 14.599 7.32436 15.5289 7.32436 16.7525C7.32436 17.9027 7.61802 18.7592 8.22981 19.3465C8.81713 19.9583 9.67364 20.252 10.7993 20.252ZM30.4501 22.8949C30.0096 22.8949 29.716 22.8215 29.5202 22.6502C29.3244 22.5034 29.1531 22.1607 29.0063 21.6958L23.2554 2.77917C23.1086 2.28974 23.0352 1.9716 23.0352 1.8003C23.0352 1.40876 23.231 1.18851 23.6225 1.18851H26.0207C26.4857 1.18851 26.8038 1.26193 26.9751 1.43323C27.1709 1.58006 27.3177 1.92266 27.4646 2.38762L31.5758 18.5879L35.3934 2.38762C35.5157 1.89819 35.6626 1.58006 35.8583 1.43323C36.0541 1.2864 36.3967 1.18851 36.8372 1.18851H38.7949C39.2599 1.18851 39.578 1.26193 39.7738 1.43323C39.9696 1.58006 40.1409 1.92266 40.2388 2.38762L44.1053 18.7837L48.3389 2.38762C48.4857 1.89819 48.657 1.58006 48.8283 1.43323C49.0241 1.2864 49.3422 1.18851 49.7827 1.18851H52.0586C52.4502 1.18851 52.6704 1.38428 52.6704 1.8003C52.6704 1.92266 52.6459 2.04502 52.6215 2.19185C52.597 2.33868 52.548 2.53445 52.4502 2.80364L46.5525 21.7203C46.4056 22.2097 46.2343 22.5278 46.0386 22.6747C45.8428 22.8215 45.5247 22.9194 45.1086 22.9194H43.0041C42.5391 22.9194 42.221 22.846 42.0252 22.6747C41.8294 22.5034 41.6581 22.1852 41.5602 21.6958L37.7671 5.91155L33.9985 21.6713C33.8761 22.1608 33.7293 22.4789 33.5335 22.6502C33.3378 22.8215 32.9952 22.8949 32.5547 22.8949H30.4501ZM61.8962 23.5556C60.6237 23.5556 59.3512 23.4088 58.1276 23.1151C56.904 22.8215 55.9496 22.5034 55.3133 22.1363C54.9218 21.916 54.6526 21.6713 54.5547 21.4511C54.4568 21.2308 54.4079 20.9861 54.4079 20.7659V19.5178C54.4079 19.0039 54.6037 18.7592 54.9707 18.7592C55.1176 18.7592 55.2644 18.7837 55.4112 18.8326C55.5581 18.8815 55.7783 18.9794 56.023 19.0773C56.8551 19.4444 57.7605 19.7381 58.7149 19.9338C59.6938 20.1296 60.6482 20.2275 61.627 20.2275C63.1688 20.2275 64.3679 19.9583 65.1999 19.4199C66.0319 18.8815 66.4724 18.0984 66.4724 17.0951C66.4724 16.4099 66.2522 15.8471 65.8117 15.3821C65.3712 14.9171 64.5392 14.5011 63.3401 14.1096L59.7917 13.0083C58.0052 12.4455 56.6838 11.6135 55.8762 10.5122C55.0686 9.43547 54.6526 8.23636 54.6526 6.96383C54.6526 5.93602 54.8728 5.03057 55.3133 4.24747C55.7538 3.46438 56.3411 2.77917 57.0753 2.24079C57.8095 1.67794 58.6415 1.26193 59.6204 0.968265C60.5992 0.674605 61.627 0.552246 62.7038 0.552246C63.2422 0.552246 63.805 0.576718 64.3434 0.650133C64.9062 0.723548 65.4202 0.821435 65.9341 0.919321C66.4235 1.04168 66.8884 1.16404 67.3289 1.31087C67.7694 1.4577 68.112 1.60453 68.3568 1.75136C68.6994 1.94713 68.9441 2.14291 69.0909 2.36315C69.2377 2.55892 69.3111 2.82811 69.3111 3.17072V4.32089C69.3111 4.83479 69.1154 5.10398 68.7483 5.10398C68.5525 5.10398 68.2344 5.00609 67.8184 4.81032C66.4235 4.17406 64.8573 3.85592 63.1198 3.85592C61.7249 3.85592 60.6237 4.07617 59.8651 4.54113C59.1065 5.00609 58.7149 5.71577 58.7149 6.71911C58.7149 7.40432 58.9596 7.99164 59.4491 8.4566C59.9385 8.92157 60.8439 9.38653 62.1409 9.80255L65.6159 10.9038C67.3779 11.4666 68.6504 12.2497 69.409 13.2531C70.1677 14.2564 70.5347 15.4066 70.5347 16.6791C70.5347 17.7314 70.3145 18.6858 69.8985 19.5178C69.458 20.3498 68.8707 21.084 68.112 21.6713C67.3534 22.2831 66.448 22.7236 65.3957 23.0417C64.2944 23.3843 63.1443 23.5556 61.8962 23.5556Z" fill="#fff"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M66.5219 35.4487C58.4707 41.3954 46.7732 44.5522 36.7154 44.5522C22.6197 44.5522 9.91887 39.3397 0.325967 30.6768C-0.432655 29.9915 0.252552 29.0616 1.158 29.6C11.534 35.62 24.3327 39.2663 37.5719 39.2663C46.504 39.2663 56.3172 37.4065 65.3473 33.5889C66.6932 32.9771 67.8434 34.4699 66.5219 35.4487Z" fill="#FF9900"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M69.8749 31.6312C68.8471 30.3097 63.0718 30.9949 60.4533 31.313C59.6702 31.4109 59.5479 30.7257 60.2575 30.2118C64.8582 26.9816 72.42 27.9115 73.301 28.9882C74.1819 30.0895 73.0562 37.6512 68.7492 41.273C68.0885 41.8359 67.4522 41.5422 67.7459 40.8081C68.7247 38.3854 70.9027 32.9282 69.8749 31.6312Z" fill="#FF9900"/>
</svg>`
	},
	{
		name: 'Doppler',
		iconType: 'image',
		icon: '../assets/img/doppler.png'
	},
	{
		name: 'Azure',
		iconType: 'image',
		icon: '../assets/img/azure.svg'
	},
	{
		name: 'Infisical',
		iconType: 'image',
		icon: '../assets/img/infisical.png'
	},
	{
		name: 'GCP',
		iconType: 'image',
		icon: '../assets/img/gcloud.svg'
	}
];

// Use direct path for the powered by logo
const onboardbasePoweredLogo = '/assets/img/onboardbase-2.png';
const kagePoweredLogo = '/assets/img/kage-long-blue.png';

const currentProvider = ref(providers[0]);
let intervalId;

function updateProvider() {
	const currentIndex = providers.findIndex(p => p.name === currentProvider.value.name);
	const nextIndex = (currentIndex + 1) % providers.length;
	
	// Fade out
	const importText = document.querySelector('.import-text');
	const importIcon = document.querySelector('.import-icon');
	if (importText && importIcon) {
		importText.style.opacity = '0';
		importIcon.style.opacity = '0';
	}
	
	// Update after fade out
	setTimeout(() => {
		currentProvider.value = providers[nextIndex];
		if (importText && importIcon) {
			importText.style.opacity = '1';
			importIcon.style.opacity = '1';
		}
	}, 30);
}

onMounted(() => {
	intervalId = setInterval(updateProvider, 3000); // Change every 20 seconds
	
});

onUnmounted(() => {
	if (intervalId) clearInterval(intervalId);
});
</script>
