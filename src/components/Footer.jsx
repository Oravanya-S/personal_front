import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div class="flex px-12 gap-8 py-20">
        <div class="w-full max-w-1/4">
          <h3 class="text-lg font-semibold mb-4">Legal</h3>
          <ul class="flex flex-col gap-3">
            <li>Legal notice</li>
            <li>Term of sale</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div class="w-full max-w-1/4">
          <h3 class="text-lg font-semibold mb-4">Assistance</h3>
          <ul class="flex flex-col gap-3">
            <li>Ordering</li>
            <li>Shipping Information</li>
            <li>Returns & Exchange	</li>
          </ul>
        </div>

        <div class="w-full max-w-1/4">
          <h3 class="text-lg font-semibold mb-4">Shop</h3>
          <ul class="flex flex-col gap-3">
            <li>Contact us</li>
            <li>Retailers</li>
          </ul>
        </div>

        <div class="w-full max-w-1/4">
          <h3 class="text-lg font-semibold mb-4">Follow</h3>
          <ul class="flex flex-col gap-3">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Line</li>
          </ul>
        </div>
      </div>
      <hr className='border-black'/>
      <div class="flex px-12 py-10">
        <p>© Marietta 2022</p>
      </div>
      
    </footer>
  )
}