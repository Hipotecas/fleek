"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[3396],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>f});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return i?o.createElement(f,a(a({ref:t},h),{},{components:i})):o.createElement(f,a({ref:t},h))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<r;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8198:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=i(7462),n=(i(7294),i(3905));const r={title:"Bloom Filters and Cuckoo Filters for Cache Summarization",description:"Summary of our experiment informing whether or not we should replace our implementation of Counting Bloom filters with Cuckoo filters.",slug:"bloom-and-cuckoo-filters-for-cache-summarization",image:"./assets/bloom-cuckoo/bloom.png?202301181528",authors:{name:"Matthias Wright",title:"Software Engineer",url:"https://github.com/matthias-wright",image_url:"https://github.com/matthias-wright.png"},tags:["fleek network","blog","engineering","content routing"]},a=void 0,l={permalink:"/fleek/blog/bloom-and-cuckoo-filters-for-cache-summarization",source:"@site/blog/bloom-and-cuckoo-filters-for-cache-summarization.md",title:"Bloom Filters and Cuckoo Filters for Cache Summarization",description:"Summary of our experiment informing whether or not we should replace our implementation of Counting Bloom filters with Cuckoo filters.",date:"2023-02-16T01:41:34.000Z",formattedDate:"February 16, 2023",tags:[{label:"fleek network",permalink:"/fleek/blog/tags/fleek-network"},{label:"blog",permalink:"/fleek/blog/tags/blog"},{label:"engineering",permalink:"/fleek/blog/tags/engineering"},{label:"content routing",permalink:"/fleek/blog/tags/content-routing"}],readingTime:10.36,hasTruncateMarker:!0,authors:[{name:"Matthias Wright",title:"Software Engineer",url:"https://github.com/matthias-wright",image_url:"https://github.com/matthias-wright.png",imageURL:"https://github.com/matthias-wright.png"}],frontMatter:{title:"Bloom Filters and Cuckoo Filters for Cache Summarization",description:"Summary of our experiment informing whether or not we should replace our implementation of Counting Bloom filters with Cuckoo filters.",slug:"bloom-and-cuckoo-filters-for-cache-summarization",image:"./assets/bloom-cuckoo/bloom.png?202301181528",authors:{name:"Matthias Wright",title:"Software Engineer",url:"https://github.com/matthias-wright",image_url:"https://github.com/matthias-wright.png",imageURL:"https://github.com/matthias-wright.png"},tags:["fleek network","blog","engineering","content routing"]},nextItem:{title:"The Fleek Network",permalink:"/fleek/blog/the-fleek-network"}},s={image:i(123).Z,authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Bloom Filters",id:"bloom-filters",level:2},{value:"Cuckoo Filters",id:"cuckoo-filters",level:2},{value:"Benchmarking",id:"benchmarking",level:2},{value:"Experimental Setup",id:"experimental-setup",level:2},{value:"Memory Footprint",id:"memory-footprint",level:2},{value:"Lookup Performance",id:"lookup-performance",level:2},{value:"Insertion Performance",id:"insertion-performance",level:2},{value:"Capacity and Scaling",id:"capacity-and-scaling",level:2},{value:"Other Filters",id:"other-filters",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:3}],h={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(123).Z,width:"1200",height:"628"})),(0,n.kt)("p",null,"Disclaimer: This is not a general comparison between Bloom filters and Cuckoo filters. This blog post summarizes some of the experiments we conducted to decide whether or not we should replace our implementation of Counting Bloom filters with Cuckoo filters, for a specific use case."),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Nodes on Fleek Network currently use Counting Bloom filters to summarize their cached content. These cache summaries are exchanged with other nodes in order to facilitate content routing."),(0,n.kt)("p",null,"If a particular node does not store a requested piece of content, it can use the Bloom filters that it received from its peers to check if a peer stores the requested content."),(0,n.kt)("p",null,"We are using Counting Bloom filters rather than regular Bloom filters because we need to be able to remove elements from the filter to support cache eviction."),(0,n.kt)("h2",{id:"bloom-filters"},"Bloom Filters"),(0,n.kt)("p",null,"A Bloom filter is a space-efficient probabilistic data structure that can be used to perform approximate set membership queries.\nThe answer to an approximate set membership query is not ",(0,n.kt)("inlineCode",{parentName:"p"},"no")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"yes,")," but rather ",(0,n.kt)("inlineCode",{parentName:"p"},"no")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"probably.")," This ",(0,n.kt)("inlineCode",{parentName:"p"},"probably")," is quantified with the false positive rate.  "),(0,n.kt)("p",null,"One of the convenient features of Bloom filters is that they can be configured to have a specific false positive rate.\nOf course, there is a tradeoff here; the lower the false positive rate, the larger the memory footprint. Bloom filters support two operations: ",(0,n.kt)("inlineCode",{parentName:"p"},"insert")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"contains."),"  "),(0,n.kt)("p",null,"A Bloom filter is represented by an array of m bits together with k independent hash functions. To insert an element into the filter, it is hashed with each of the k hash functions.\nThe resulting hashes are interpreted as integers (modulo m) to obtain k array positions. The bits at these positions are then set to 1 (if there aren't already 1).",(0,n.kt)("br",{parentName:"p"}),"\n","To check whether or not an element is contained in the filter, the element is hashed k times with the different hash functions."),(0,n.kt)("p",null,"If all bits at the resulting array positions are 1, the element is assumed to be present. If any of the k bits are zero, we can be certain that the queried element is not present in the set."),(0,n.kt)("p",null,"However, even if all bits are 1, it might still be the case that the bits were set by a combination of other elements. This is where the aforementioned false positive rate comes into play.  "),(0,n.kt)("p",null,"Since we also need a ",(0,n.kt)("inlineCode",{parentName:"p"},"remove")," operation for our use case, we have been using Counting Bloom filters, a variant of Bloom filters.\nCounting Bloom filters retain most of the properties that regular Bloom filters have. The ",(0,n.kt)("inlineCode",{parentName:"p"},"remove")," operation comes at the cost of an increased memory footprint."),(0,n.kt)("p",null,"Each position in the array is no longer a single bit but a group of bits representing a counter.\nWhenever an element is inserted into the filter, the counters for all k positions are incremented by 1. To remove an element, we decrement the counters."),(0,n.kt)("h2",{id:"cuckoo-filters"},"Cuckoo Filters"),(0,n.kt)("p",null,"Bloom filters are the most known members of a class of data structures called Approximate Membership Query Filters (AMQ Filters).\nA relatively recent addition to this class is the Cuckoo filter ","[1]",". Cuckoo filters share many similarities with Bloom filters, especially Counting Bloom filters."),(0,n.kt)("p",null,"They are space-efficient and can be used for approximate set membership queries. Cuckoo filters also support the operations ",(0,n.kt)("inlineCode",{parentName:"p"},"insert,")," ",(0,n.kt)("inlineCode",{parentName:"p"},"contains,")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"remove,")," and have configurable false positive rates.  "),(0,n.kt)("p",null,"Cuckoo filters are based on Cuckoo hash tables ","[2]"," and leverage an optimization called partial-key cuckoo hashing. A basic Cuckoo hash table consists of an array of buckets.\nWe determine two candidate buckets for each element using two different hash functions, h1 and h2.  "),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"contains")," operation will check if either bucket contains the element.\nFor insertion, if either bucket is empty, the element will be inserted into the empty bucket."),(0,n.kt)("p",null,"If neither bucket is empty, one of the buckets is selected, and the existing element is removed and inserted into its alternate location.\nThis may trigger another relocation if the alternate location is not empty.  "),(0,n.kt)("p",null,"Although the insertion operation may perform a sequence of relocations, the amortized runtime is O(1).  "),(0,n.kt)("p",null,"Most implementations of Cuckoo hash tables and, consequently, Cuckoo filters will use buckets that can hold multiple elements, as proposed in ","[3]","."),(0,n.kt)("p",null,"For Cuckoo filters, the hash table size is reduced by only storing fingerprints - a bit string calculated from an element's hash - rather than key-value pairs."),(0,n.kt)("p",null,"The fingerprint size is derived from the desired false positive rate.",(0,n.kt)("br",{parentName:"p"}),"\n","A problem that arises is that, to relocate existing fingerprints using the Cuckoo hashing approach described above, we need the original hash from which the fingerprint was derived."),(0,n.kt)("p",null,"Of course, we could store this hash somewhere, but the whole point of using fingerprints is to reduce the memory footprint of the filter."),(0,n.kt)("p",null,"The solution to this predicament is the aforementioned partial-key cuckoo hashing, a technique for determining an element's alternate location using only its fingerprint.",(0,n.kt)("br",{parentName:"p"}),"\n","For a given element x, the two candidate buckets are computed as follows:  "),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(3027).Z,width:"1324",height:"194"})),(0,n.kt)("p",null,"An important property of this technique is that h1(x) can also be computed from h2(x) and the fingerprint."),(0,n.kt)("h2",{id:"benchmarking"},"Benchmarking"),(0,n.kt)("p",null,"As this post mentioned, we are not aiming for a general comparison of Counting Bloom and Cuckoo filters."),(0,n.kt)("p",null,"Instead, we want to determine which filter suits our specific use case better. The two main properties we are looking for are space efficiency and lookup performance.  "),(0,n.kt)("p",null,"Space efficiency is important because nodes frequently update their cache and have to communicate these changes with their peers. These messages should take up as little bandwidth as possible."),(0,n.kt)("p",null,"Lookup speed is also important because Fleek Network aims to serve user requests as quickly as possible. Checking whether a peer has some content stored in their cache summary should not be a bottleneck.  "),(0,n.kt)("h2",{id:"experimental-setup"},"Experimental Setup"),(0,n.kt)("p",null,"We are using our own Counting Bloom filter ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/blob/483f4d56cbaa5e83182454d2c1db6f6af7c54912/crates/ursa-network/src/utils/bloom_filter.rs#L11"},"implementation")," and\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sile/scalable_cuckoo_filter"},"this")," Cuckoo filter implementation in Rust (the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/efficient/cuckoofilter"},"original")," implementation is in C++). All experiments\nwere performed on a Linux machine with 16 GB RAM and an Intel Core i7 (10th Gen). Whenever the experiment is probabilistic, we repeat the experiment 20 times and report the mean and standard deviation."),(0,n.kt)("h2",{id:"memory-footprint"},"Memory Footprint"),(0,n.kt)("p",null,"For both Counting Bloom filters and Cuckoo filters, the memory footprint is determined by two factors: the filter's capacity and the desired false positive rate. In the first experiment, we examine the impact that\nthese factors have on the memory footprint.  "),(0,n.kt)("p",null,"To this end, we fix the false positive rate and initialize the filters with capacities ranging from 100K to 1M. The result is shown in Fig. 1.\nThe size of Bloom filters scales linearly with the capacity. Cuckoo filters are more space-efficient. This result is consistent with the experiments reported in ","[1]","."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2050).Z,width:"640",height:"480"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Figure 1: We fix the false positive rate and initialize the filters with capacities ranging from 100K to 1M. The y-axis shows the size of the filters in Megabytes.")),(0,n.kt)("p",null,"Next, we fix the capacity and initialize the filters with false positive rates ranging from 0.0001 to 0.5. Fig. 2 shows that Cuckoo filters are more space-efficient."),(0,n.kt)("p",null,"The gap between Counting Bloom filters and Cuckoo filters grows as the false positive rate decreases. This is also consistent with experiments in ","[1]","."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(3115).Z,width:"640",height:"480"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Figure 2: We fix the capacity and initialize the filters with false positive rates ranging from 0.0001 to 0.5. The y-axis shows the size of the filters in Megabytes.")),(0,n.kt)("h2",{id:"lookup-performance"},"Lookup Performance"),(0,n.kt)("p",null,"We first add elements to both filters until the capacity is reached. We then measure the lookup performance for different ratios of positive and negative lookups."),(0,n.kt)("p",null,"A positive lookup is for an existing element, and a negative lookup is for an element not contained in the filter. We perform 100K lookups for each ratio and report the average lookup duration and standard deviation. "),(0,n.kt)("p",null,"Fig. 3 shows the results. Bloom filters perform slightly better on average than Cuckoo filters. This result is inconsistent with ","[1]",",\nwhere Cuckoo filters were reported to have a better lookup performance than Bloom filters. It should be noted here that the authors in ","[1]"," use the original C++ Cuckoo filter implementation and their own unreleased Bloom filter implementation. In contrast, we use a Rust Cuckoo filter implementation and our Bloom filter implementation. We cannot easily determine the reason for this discrepancy."),(0,n.kt)("p",null,"However, the performance difference is negligible."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(9596).Z,width:"640",height:"480"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Figure 3: Lookup performance for different ratios of positive and negative lookups. For example, ratio 0.25 indicates that 25% of lookups are positive and 75% are negative.\nThe shaded region indicates the standard deviation.")),(0,n.kt)("h2",{id:"insertion-performance"},"Insertion Performance"),(0,n.kt)("p",null,"Less critical than lookup performance but still important for our purposes is insertion performance. We measure how the insertion performance varies for different occupancy levels.\nFig. 4 shows the results. The insertion performance is constant across all levels of occupancy for Bloom filters."),(0,n.kt)("p",null,"For Cuckoo filters, the performance decreases as the filter becomes fuller because more relocations are required. In Fig. 4, the performance for Bloom filters is not constant. It quickly increases and then remains constant. This can be explained by CPU caching. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(2150).Z,width:"640",height:"480"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Figure 4: Insertion performance for different occupancy levels. The shaded region indicates the standard deviation.")),(0,n.kt)("h2",{id:"capacity-and-scaling"},"Capacity and Scaling"),(0,n.kt)("p",null,"We have mentioned the capacity of a filter several times now. An interesting case is what happens when a filter's capacity is exceeded.\nBloom filters and Cuckoo filters behave differently in this scenario."),(0,n.kt)("p",null,"For Bloom filters, the ",(0,n.kt)("inlineCode",{parentName:"p"},"insertion")," operation always succeeds. However, the false positive rate will rapidly increase as we exceed the filter's capacity. While Bloom filters fail silently, Cuckoo filters are more explicit. Most implementations have a maximum number of\nrelocations that will be performed for an insertion. The ",(0,n.kt)("inlineCode",{parentName:"p"},"insertion")," operation will return an error if more relocations are required.  "),(0,n.kt)("p",null,"For both filters, we can avoid this problem by simply initializing the filter with a sufficiently large capacity. However, this will increase the memory footprint of the filter."),(0,n.kt)("p",null,"Furthermore, it is difficult to predict how many elements a node on Fleek Network will cache. It is also likely that the number of cached elements will greatly vary for different nodes.  "),(0,n.kt)("p",null,"Fortunately, a variant of Bloom filters called Scalable Bloom Filters ","[4]"," can adapt dynamically to the number of elements stored while guaranteeing a maximum false positive rate."),(0,n.kt)("p",null,"The proposed technique is also applicable to Cuckoo filters."),(0,n.kt)("h2",{id:"other-filters"},"Other Filters"),(0,n.kt)("p",null,"While we only looked at Bloom filters and Cuckoo filters, there are other AMQ filters that we want to mention here briefly:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Quotient filters ","[5, 6]",": Compact hash tables that support insertion, lookup, and deletion. Less space-efficient than Bloom filters and Cuckoo filters.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"XOR filters ","[7]",": More space-efficient than Bloom filters and Cuckoo filters. However, they are static, meaning the filter has to be rebuilt if additional elements are added. "))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"We examined whether Counting Bloom filters or Cuckoo filters are more suitable for summarizing caches on Fleek Network. Cuckoo filters are more space-efficient, especially for lower false positive rates. Bloom filters have a slightly better insertion and lookup performance for the implementations we tested."),(0,n.kt)("p",null,"Both filters can be adapted to grow and shrink in size dynamically. Since the difference in insertion and lookup performance is negligible while Cuckoo filters are significantly more space-efficient, we favor Cuckoo filters for our use case.  "),(0,n.kt)("h3",{id:"references"},"References"),(0,n.kt)("p",null,"[1]"," Bin Fan, Dave G. Andersen, Michael Kaminsky, and Michael D. Mitzenmacher. Cuckoo Filter: Practically Better Than Bloom.\nIn Proceedings of the 10th ACM International Conference on emerging Networking Experiments and Technologies (CoNEXT 14). Association for Computing Machinery, New York, NY, USA, pp. 75-88, 2014.  "),(0,n.kt)("p",null,"[2]"," Rasmus Pagha and Flemming Friche Rodler. Cuckoo hashing. Journal of Algorithms, 51(2), pp. 122-144, 2004.  "),(0,n.kt)("p",null,"[3]"," Martin Dietzfelbinger and Christoph Weidling. Balanced Allocation and Dictionaries with Tightly Packed Constant Size Bins. Theoretical Computer Science, 380(1), pp. 47-68, 2007.  "),(0,n.kt)("p",null,"[4]"," Paulo S. Almeida, Carlos Baquero, Nuno Pregui\xe7a, and David Hutchison. Scalable Bloom Filters. Information Processing Letters, 101(6), pp. 255-261, 2007.  "),(0,n.kt)("p",null,"[5]"," John G. Cleary. Compact hash tables using bidirectional linear probing. IEEE Transactions on Computers. 33(9), pp. 828-834, 1984.  "),(0,n.kt)("p",null,"[6]"," Anna Pagh, Rasmus Pagh, and S. Srinivasa Rao. An optimal Bloom filter replacement. Proceedings of the Sixteenth Annual ACM-SIAM Symposium on Discrete Algorithms, pp. 823-829, 2005. "),(0,n.kt)("p",null,"[7]"," Thomas Mueller Graf and Daniel Lemire. Xor Filters: Faster and Smaller Than Bloom and Cuckoo Filters. ACM Journal of Experimental Algorithmics. 25, pp. 1-16, 2020."))}p.isMDXComponent=!0},123:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/bloom-79da0db687b4fb2060758838b9c44513.png"},2050:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/capacity-size-5c2576bd69db0e5b510781e7cc1c5257.png"},3115:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/fp-rate-size-fbb54b2450b4a91e28c97d8adf0253e8.png"},2150:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/insert-3ff48d4c63724adcf399f81b29607691.png"},9596:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/lookup-e36011237d8602b5f6c36fe5dd145bf5.png"},3027:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/math-formul-a247d4df475b26b1e7cbb2acfc0ab8c2.png"}}]);