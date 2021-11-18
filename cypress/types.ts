type MainViewports = Extract<
Cypress.ViewportPreset,
'iphone-8' | 'iphone-xr' | 'samsung-s10' | 'ipad-mini' | 'macbook-11' | 'macbook-15'
>

type DeviceTypes = 'Mobile' | 'Tablet' | 'Desktop'

export type Viewports = [MainViewports, DeviceTypes][]
