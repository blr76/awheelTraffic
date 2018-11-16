###### FORMAT

-   [x] ~~this is a complete item~~ @ipk
-   [ ] this is an incomplete item

    *markdown cheatsheet on linkList*

## To-Do

#### legend

-   [ ] update with Jason's unique values for incident type, maybe classify
    -   [ ] crash, hazard, informational
-   [ ] update legend with optional layers
-   [ ] fit legend in div
    -   [ ] **special attention** to landscape mobile

#### search

-   [ ] need html buttons for user input
-   [ ] query js function
-   [ ] heatmap toggle, based on query results
-   [ ] search based on times of day, show me accidents from Mondays at 5pm

#### locate

-   [ ] geocoder or search widget
-   [ ] research output from locate to buffer
-   [ ] mobile location finder
-   [ ] user adjustable buffer distance

#### style

-   [ ] revisit color of title bar
-   [ ] clean css and comment
  - [ ] create custom css for dark mode, update text and toolbox background on click, including dark mode zoom buttons from esri

#### mobile

-   [ ] symbology scale with device size
-   [ ] research ios landscape status fix
-   [ ] retina display 192dpi
-   [ ] add ios splash screen for pwa

#### other

-   [ ] tooltips for toolbox
- [ ] fix home button to use default extent
-   [ ] add refresh button to each toolbox window
      - [ ] refresh should reload entire map, not html doc
-   [ ] dynamic default map extent based on screen
-   [ ] icons that load only for active incidents (initial display) based on three classes
-   [ ] aboutHelper
    -   [ ] research logo mods for better         about identification, maybe re-position logo elements and add unicode tooltip
  - [x] ~~add footer for copyright info~~ @ipk

## Wish List

-   [x] ~~click menu open / click menu close~~ @ipk
-   [x] ~~different renderer for roads?~~ @ipk
-   [ ] contact traffic dataset owner for incident type desriptions
    -   [ ] this would also be helpful to understand the accuracy of reported time, does time represent when incident occurred or ended?
-   [ ] popup for add to home screen on ios and android
-   [ ] service worker for ios and android to cache api calls
  - [ ] cookie storage to remember dark/light mode toggle pwa
-   [ ] double tap to zoom on mobile
    -   [ ] [Link](https://gis.stackexchange.com/questions/102380/double-tap-on-the-map-not-work-in-the-chrome-of-nexus-7)