# Austin Traffic Incidents
A project to map and visualize traffic incidents in Austin, TX

### Introduction
Austin is a bustling city with a diverse culinary experience, strong musical history, and plentiful outdoor opportunities in the hot sun and cool rivers. These factors help to draw new residents from other nearby cities and states to the growing metropolis. A report filed by the Texas Association of Realtors illustrates a comprehensive analysis of population change metrics in the state of Texas. They show that the city had a net gain of 16,890 new out-of-state residents in 2015 (Texas Association of Realtors 2015). This strong demand puts additional pressure on the existing city infrastructure. Austin’s lack of a city rail network directs much of the commuting traffic onto the Texas roadways with a large volume of vehicles required to transport the growing populous. 
Traffic analysis is important for city officials to be able to make informed decisions about infrastructure. Two common methods of traffic analysis are travel demand modeling, estimating traffic based on housing units, and average daily traffic, an interpolation method to guess traffic at unknown locations (Bakiera et al. 2016). Austin Traffic Incidents proposes a third method for analysis by studying the spatial relationship of traffic incidents. 
With the high number of vehicles on the road, drivers will need to be more cautious as the potential for being a victim of someone else’s error increases. One way to avoid traffic incidents is to research the areas of town that historically show a large amount of similar types of traffic events and bypass those more dangerous areas. Austin Traffic Incidents aims to become a tool that could be used by drivers in Austin to plan their daily commute to avoid areas that are more prone to traffic. The City of Austin provides their traffic incident data to the public for free, but it is difficult to discern meaningful patterns without performing a spatial analysis.

### Data and Methodology
Data for this web map will be acquired from The City of Austin’s Open Data Portal. This portal provides easy access to a wide variety of datasets provided by the City of Austin, Texas. For this project, the awheel team identified several potential datasets to implement and determined the Real-Time Traffic Incident Reports dataset will be used. This dataset aggregates traffic incident information from law enforcement agencies in Travis County, Texas that are reported via an RSS feed. The data are near-real-time, pulling new incidents from the RSS feed every 5 minutes. The data portal also provides an API (Socrata Open Data) for querying the data, therefore enabling data used in this project to be updated near-real-time. The fields relevant to this project will be the date and time the incident occurred (Published Date), latitude, longitude, whether the incident is active (Status), and the type of incident reported. Austin Traffic Incidents will create a web interface for displaying historic traffic incidents with multiple temporal scales, a query function to search by incident type, a geocoder to search by an address, and a heat map showing the areas of greatest concentration of incidents. A web application is ideal as it allows easy deployment to the public and easy updating of the data that drives the model. The functionalities of our project will be accomplished using the ArcGIS JavaScript API with traffic incident data parsed from a JavaScript object notation (JSON) data file.  This is an open-standard data file format composed of attribute-value pairs that is language-independent.  See Figure 1 for an approximation of user interface design.

![Proposed UI](https://github.com/atym/awheelTraffic/blob/master/img/proposedUI.png)

### Conclusion
The final deliverable for this project will be an interactive map of recent traffic incidents, their severity, and proximate roads around Austin. When the application first loads only active incidents will be shown, but the user will also be able to show more historical data over months or years and filter by traffic incident type. With this project, our team hopes to educate travelers in the Austin area to the most dangerous roads in Austin that may be previously unknown to the public. If we have time, we’d also like to implement route navigation from one address to another that gives an indication of how dangerous the route is overall. This is a more complex feature involving network analysis and requires more research, so it may have to be an additional improvement that is not completed with the core project. Because of the dynamic nature of the web map, it can be used to not only address the needs of today, but also the needs of the future. The City of Austin could use this visual representation of traffic incident data to explain spatial trends to stakeholders involved in the planning and implementation of infrastructure.

### References
```Bakiera, A., R. Weaver, C. Hiner, and Y. Lu. 2016. Spatial analysis of traffic congestion and transit accessibility in Austin, Texas. https://digital.library.txstate.edu/bitstream/handle/10877/6323/BAKIERA-THESIS-2016.pdf?sequence=1 (last accessed 29 October 2018).```

```Texas Relocation Report. 2017. Texas Association of Realtors. https://www.texasrealestate.com/wp-content/uploads/2017TexasRelocationReport.pdf (last accessed 29 October 2018).```

```Transportation and Mobility. https://data.austintexas.gov/Transportation-and-Mobility/Real-Time-Traffic-Incident-Reports/dx9v-zd7x (last accessed 1 November 2018).```

### Appendix
Jason Bartling: Data and Methodology, and Conclusion

Ian Kelly: Introduction, References, and Proposal Design

Brandon Rose: Data and Methodology, and Web Application Prototype UI
