
// COLLECTION TO USE
var coll = db.puffer;


// GRID SIZE
var MAX_X = 562;
var MAX_Y = 160;
var MAX_TIME = 1000;


// INITIAL CONDITIONS
function setupInitialConditions() {
	return [
// cat Stable_puffer_initial.pnm | sed -e '1,4d' | awk 'NR%3==0' | grep -n 255 | sed -e 's/:.*$//' | awk '{i = $1; print i, int(i/67), i%67}' | awk '{printf("{y:%d, x:%d},\n", $2, $3);}' > puffer-initial.js
{y:2, x:35},
{y:2, x:37},
{y:3, x:35},
{y:3, x:38},
{y:4, x:23},
{y:4, x:38},
{y:4, x:39},
{y:5, x:23},
{y:5, x:24},
{y:5, x:25},
{y:5, x:26},
{y:5, x:40},
{y:6, x:25},
{y:6, x:26},
{y:6, x:38},
{y:6, x:39},
{y:6, x:40},
{y:6, x:41},
{y:7, x:28},
{y:7, x:37},
{y:7, x:42},
{y:8, x:25},
{y:8, x:26},
{y:8, x:27},
{y:8, x:28},
{y:8, x:39},
{y:8, x:42},
{y:9, x:29},
{y:9, x:39},
{y:9, x:42},
{y:10, x:25},
{y:10, x:28},
{y:10, x:29},
{y:10, x:30},
{y:10, x:41},
{y:11, x:27},
{y:11, x:28},
{y:11, x:29},
{y:11, x:35},
{y:11, x:37},
{y:11, x:38},
{y:11, x:39},
{y:11, x:40},
{y:12, x:28},
{y:12, x:35},
{y:12, x:39},
{y:13, x:23},
{y:13, x:25},
{y:13, x:26},
{y:13, x:27},
{y:13, x:38},
{y:14, x:23},
{y:14, x:24},
{y:14, x:27},
{y:14, x:36},
{y:14, x:38},
{y:15, x:24},
{y:15, x:25},
{y:15, x:26},
{y:16, x:24},
{y:16, x:37},
{y:16, x:38},
{y:16, x:39},
{y:17, x:26},
{y:17, x:38},
{y:17, x:39},
{y:18, x:24},
{y:18, x:26},
{y:18, x:37},
{y:18, x:38},
{y:18, x:39},
{y:19, x:27},
{y:20, x:24},
{y:20, x:26},
{y:20, x:36},
{y:20, x:38},
{y:21, x:26},
{y:21, x:38},
{y:22, x:24},
{y:22, x:35},
{y:22, x:39},
{y:23, x:24},
{y:23, x:25},
{y:23, x:26},
{y:23, x:35},
{y:23, x:37},
{y:23, x:38},
{y:23, x:39},
{y:23, x:40},
{y:24, x:23},
{y:24, x:24},
{y:24, x:27},
{y:24, x:41},
{y:25, x:23},
{y:25, x:25},
{y:25, x:26},
{y:25, x:27},
{y:25, x:39},
{y:25, x:42},
{y:26, x:28},
{y:26, x:39},
{y:26, x:42},
{y:27, x:27},
{y:27, x:28},
{y:27, x:29},
{y:27, x:37},
{y:27, x:42},
{y:28, x:25},
{y:28, x:28},
{y:28, x:29},
{y:28, x:30},
{y:28, x:38},
{y:28, x:39},
{y:28, x:40},
{y:28, x:41},
{y:29, x:29},
{y:29, x:40},
{y:30, x:25},
{y:30, x:26},
{y:30, x:27},
{y:30, x:28},
{y:30, x:38},
{y:30, x:39},
{y:31, x:28},
{y:31, x:35},
{y:31, x:38},
{y:31, x:42},
{y:32, x:25},
{y:32, x:26},
{y:32, x:35},
{y:32, x:37},
{y:32, x:42},
{y:32, x:43},
{y:32, x:44},
{y:32, x:45},
{y:33, x:23},
{y:33, x:24},
{y:33, x:25},
{y:33, x:26},
{y:33, x:44},
{y:33, x:45},
{y:34, x:23},
{y:34, x:32},
{y:34, x:33},
{y:34, x:35},
{y:34, x:47},
{y:35, x:21},
{y:35, x:23},
{y:35, x:35},
{y:35, x:44},
{y:35, x:45},
{y:35, x:46},
{y:35, x:47},
{y:36, x:21},
{y:36, x:32},
{y:36, x:34},
{y:36, x:35},
{y:36, x:48},
{y:37, x:19},
{y:37, x:22},
{y:37, x:23},
{y:37, x:32},
{y:37, x:44},
{y:37, x:47},
{y:37, x:48},
{y:37, x:49},
{y:38, x:20},
{y:38, x:21},
{y:38, x:22},
{y:38, x:30},
{y:38, x:46},
{y:38, x:47},
{y:38, x:48},
{y:39, x:18},
{y:39, x:20},
{y:39, x:30},
{y:39, x:47},
{y:40, x:18},
{y:40, x:25},
{y:40, x:27},
{y:40, x:29},
{y:40, x:30},
{y:40, x:42},
{y:40, x:44},
{y:40, x:45},
{y:40, x:46},
{y:41, x:17},
{y:41, x:18},
{y:41, x:24},
{y:41, x:27},
{y:41, x:42},
{y:41, x:43},
{y:41, x:46},
{y:42, x:17},
{y:42, x:18},
{y:42, x:26},
{y:42, x:43},
{y:42, x:44},
{y:42, x:45},
{y:43, x:17},
{y:43, x:18},
{y:43, x:21},
{y:43, x:22},
{y:43, x:25},
{y:43, x:43},
{y:44, x:17},
{y:44, x:18},
{y:44, x:21},
{y:44, x:22},
{y:44, x:23},
{y:44, x:24},
{y:44, x:45},
{y:45, x:17},
{y:45, x:18},
{y:45, x:43},
{y:45, x:45},
{y:46, x:17},
{y:46, x:18},
{y:46, x:21},
{y:46, x:22},
{y:46, x:23},
{y:46, x:24},
{y:46, x:46},
{y:47, x:17},
{y:47, x:18},
{y:47, x:21},
{y:47, x:22},
{y:47, x:25},
{y:47, x:29},
{y:47, x:31},
{y:47, x:38},
{y:47, x:40},
{y:47, x:42},
{y:47, x:46},
{y:48, x:17},
{y:48, x:18},
{y:48, x:26},
{y:48, x:29},
{y:48, x:31},
{y:48, x:32},
{y:48, x:33},
{y:48, x:34},
{y:48, x:37},
{y:48, x:39},
{y:48, x:40},
{y:48, x:42},
{y:48, x:45},
{y:49, x:17},
{y:49, x:18},
{y:49, x:26},
{y:49, x:29},
{y:49, x:33},
{y:49, x:34},
{y:49, x:37},
{y:49, x:38},
{y:49, x:43},
{y:49, x:45},
{y:50, x:17},
{y:50, x:18},
{y:50, x:21},
{y:50, x:22},
{y:50, x:25},
{y:50, x:31},
{y:50, x:32},
{y:50, x:36},
{y:50, x:37},
{y:51, x:17},
{y:51, x:18},
{y:51, x:21},
{y:51, x:22},
{y:51, x:23},
{y:51, x:24},
{y:51, x:29},
{y:51, x:31},
{y:51, x:33},
{y:51, x:34},
{y:51, x:35},
{y:51, x:36},
{y:51, x:44},
{y:51, x:45},
{y:51, x:46},
{y:52, x:17},
{y:52, x:18},
{y:52, x:29},
{y:52, x:45},
{y:52, x:46},
{y:53, x:17},
{y:53, x:18},
{y:53, x:21},
{y:53, x:22},
{y:53, x:23},
{y:53, x:24},
{y:53, x:29},
{y:53, x:31},
{y:53, x:33},
{y:53, x:34},
{y:53, x:35},
{y:53, x:36},
{y:53, x:44},
{y:53, x:45},
{y:53, x:46},
{y:54, x:17},
{y:54, x:18},
{y:54, x:21},
{y:54, x:22},
{y:54, x:25},
{y:54, x:31},
{y:54, x:32},
{y:54, x:36},
{y:54, x:37},
{y:55, x:17},
{y:55, x:18},
{y:55, x:26},
{y:55, x:29},
{y:55, x:33},
{y:55, x:34},
{y:55, x:37},
{y:55, x:38},
{y:55, x:43},
{y:55, x:45},
{y:56, x:17},
{y:56, x:18},
{y:56, x:26},
{y:56, x:29},
{y:56, x:31},
{y:56, x:32},
{y:56, x:33},
{y:56, x:34},
{y:56, x:37},
{y:56, x:39},
{y:56, x:40},
{y:56, x:42},
{y:56, x:45},
{y:57, x:17},
{y:57, x:18},
{y:57, x:21},
{y:57, x:22},
{y:57, x:25},
{y:57, x:29},
{y:57, x:31},
{y:57, x:38},
{y:57, x:40},
{y:57, x:42},
{y:57, x:46},
{y:58, x:17},
{y:58, x:18},
{y:58, x:21},
{y:58, x:22},
{y:58, x:23},
{y:58, x:24},
{y:58, x:46},
{y:59, x:17},
{y:59, x:18},
{y:59, x:43},
{y:59, x:45},
{y:60, x:17},
{y:60, x:18},
{y:60, x:21},
{y:60, x:22},
{y:60, x:23},
{y:60, x:24},
{y:60, x:45},
{y:61, x:17},
{y:61, x:18},
{y:61, x:21},
{y:61, x:22},
{y:61, x:25},
{y:61, x:43},
{y:62, x:17},
{y:62, x:18},
{y:62, x:26},
{y:62, x:43},
{y:62, x:44},
{y:62, x:45},
{y:63, x:17},
{y:63, x:18},
{y:63, x:21},
{y:63, x:22},
{y:63, x:26},
{y:63, x:42},
{y:63, x:43},
{y:63, x:46},
{y:64, x:17},
{y:64, x:18},
{y:64, x:21},
{y:64, x:22},
{y:64, x:23},
{y:64, x:24},
{y:64, x:25},
{y:64, x:27},
{y:64, x:42},
{y:64, x:44},
{y:64, x:45},
{y:64, x:46},
{y:65, x:17},
{y:65, x:18},
{y:65, x:26},
{y:65, x:27},
{y:65, x:28},
{y:65, x:47},
{y:66, x:17},
{y:66, x:18},
{y:66, x:21},
{y:66, x:22},
{y:66, x:23},
{y:66, x:24},
{y:66, x:25},
{y:66, x:27},
{y:66, x:46},
{y:66, x:47},
{y:66, x:48},
{y:67, x:17},
{y:67, x:18},
{y:67, x:21},
{y:67, x:22},
{y:67, x:26},
{y:67, x:44},
{y:67, x:47},
{y:67, x:48},
{y:67, x:49},
{y:68, x:17},
{y:68, x:18},
{y:68, x:26},
{y:68, x:48},
{y:69, x:17},
{y:69, x:18},
{y:69, x:21},
{y:69, x:22},
{y:69, x:25},
{y:69, x:44},
{y:69, x:45},
{y:69, x:46},
{y:69, x:47},
{y:70, x:17},
{y:70, x:18},
{y:70, x:21},
{y:70, x:22},
{y:70, x:23},
{y:70, x:24},
{y:70, x:47},
{y:71, x:17},
{y:71, x:18},
{y:71, x:44},
{y:71, x:45},
{y:72, x:17},
{y:72, x:18},
{y:72, x:21},
{y:72, x:22},
{y:72, x:23},
{y:72, x:24},
{y:72, x:42},
{y:72, x:43},
{y:72, x:44},
{y:72, x:45},
{y:73, x:17},
{y:73, x:18},
{y:73, x:21},
{y:73, x:22},
{y:73, x:25},
{y:73, x:42},
{y:74, x:17},
{y:74, x:18},
{y:74, x:26},
{y:75, x:17},
{y:75, x:18},
{y:75, x:21},
{y:75, x:22},
{y:75, x:26},
{y:76, x:17},
{y:76, x:18},
{y:76, x:21},
{y:76, x:22},
{y:76, x:23},
{y:76, x:24},
{y:76, x:25},
{y:76, x:27},
{y:77, x:17},
{y:77, x:18},
{y:77, x:26},
{y:77, x:27},
{y:77, x:28},
{y:77, x:42},
{y:78, x:17},
{y:78, x:18},
{y:78, x:21},
{y:78, x:22},
{y:78, x:23},
{y:78, x:24},
{y:78, x:25},
{y:78, x:27},
{y:78, x:42},
{y:78, x:43},
{y:78, x:44},
{y:78, x:45},
{y:79, x:17},
{y:79, x:18},
{y:79, x:21},
{y:79, x:22},
{y:79, x:26},
{y:79, x:44},
{y:79, x:45},
{y:80, x:17},
{y:80, x:18},
{y:80, x:26},
{y:80, x:47},
{y:81, x:17},
{y:81, x:18},
{y:81, x:21},
{y:81, x:22},
{y:81, x:25},
{y:81, x:44},
{y:81, x:45},
{y:81, x:46},
{y:81, x:47},
{y:82, x:17},
{y:82, x:18},
{y:82, x:21},
{y:82, x:22},
{y:82, x:23},
{y:82, x:24},
{y:82, x:48},
{y:83, x:17},
{y:83, x:18},
{y:83, x:44},
{y:83, x:47},
{y:83, x:48},
{y:83, x:49},
{y:84, x:17},
{y:84, x:18},
{y:84, x:21},
{y:84, x:22},
{y:84, x:23},
{y:84, x:24},
{y:84, x:46},
{y:84, x:47},
{y:84, x:48},
{y:85, x:17},
{y:85, x:18},
{y:85, x:21},
{y:85, x:22},
{y:85, x:25},
{y:85, x:47},
{y:86, x:17},
{y:86, x:18},
{y:86, x:26},
{y:86, x:42},
{y:86, x:44},
{y:86, x:45},
{y:86, x:46},
{y:87, x:17},
{y:87, x:18},
{y:87, x:21},
{y:87, x:22},
{y:87, x:26},
{y:87, x:42},
{y:87, x:43},
{y:87, x:46},
{y:88, x:17},
{y:88, x:18},
{y:88, x:21},
{y:88, x:22},
{y:88, x:23},
{y:88, x:24},
{y:88, x:25},
{y:88, x:27},
{y:88, x:43},
{y:88, x:44},
{y:88, x:45},
{y:89, x:17},
{y:89, x:18},
{y:89, x:26},
{y:89, x:27},
{y:89, x:28},
{y:89, x:43},
{y:90, x:17},
{y:90, x:18},
{y:90, x:21},
{y:90, x:22},
{y:90, x:23},
{y:90, x:24},
{y:90, x:25},
{y:90, x:27},
{y:90, x:45},
{y:91, x:17},
{y:91, x:18},
{y:91, x:21},
{y:91, x:22},
{y:91, x:26},
{y:91, x:43},
{y:91, x:45},
{y:92, x:17},
{y:92, x:18},
{y:92, x:26},
{y:92, x:46},
{y:93, x:17},
{y:93, x:18},
{y:93, x:21},
{y:93, x:22},
{y:93, x:25},
{y:93, x:29},
{y:93, x:31},
{y:93, x:38},
{y:93, x:40},
{y:93, x:42},
{y:93, x:46},
{y:94, x:17},
{y:94, x:18},
{y:94, x:21},
{y:94, x:22},
{y:94, x:23},
{y:94, x:24},
{y:94, x:29},
{y:94, x:31},
{y:94, x:32},
{y:94, x:33},
{y:94, x:34},
{y:94, x:37},
{y:94, x:39},
{y:94, x:40},
{y:94, x:42},
{y:94, x:45},
{y:95, x:17},
{y:95, x:18},
{y:95, x:29},
{y:95, x:33},
{y:95, x:34},
{y:95, x:37},
{y:95, x:38},
{y:95, x:43},
{y:95, x:45},
{y:96, x:17},
{y:96, x:18},
{y:96, x:21},
{y:96, x:22},
{y:96, x:23},
{y:96, x:24},
{y:96, x:31},
{y:96, x:32},
{y:96, x:36},
{y:96, x:37},
{y:97, x:17},
{y:97, x:18},
{y:97, x:21},
{y:97, x:22},
{y:97, x:25},
{y:97, x:29},
{y:97, x:31},
{y:97, x:33},
{y:97, x:34},
{y:97, x:35},
{y:97, x:36},
{y:97, x:44},
{y:97, x:45},
{y:97, x:46},
{y:98, x:17},
{y:98, x:18},
{y:98, x:26},
{y:98, x:29},
{y:98, x:45},
{y:98, x:46},
{y:99, x:17},
{y:99, x:18},
{y:99, x:26},
{y:99, x:29},
{y:99, x:31},
{y:99, x:33},
{y:99, x:34},
{y:99, x:35},
{y:99, x:36},
{y:99, x:44},
{y:99, x:45},
{y:99, x:46},
{y:100, x:17},
{y:100, x:18},
{y:100, x:21},
{y:100, x:22},
{y:100, x:25},
{y:100, x:31},
{y:100, x:32},
{y:100, x:36},
{y:100, x:37},
{y:101, x:17},
{y:101, x:18},
{y:101, x:21},
{y:101, x:22},
{y:101, x:23},
{y:101, x:24},
{y:101, x:29},
{y:101, x:33},
{y:101, x:34},
{y:101, x:37},
{y:101, x:38},
{y:101, x:43},
{y:101, x:45},
{y:102, x:17},
{y:102, x:18},
{y:102, x:29},
{y:102, x:31},
{y:102, x:32},
{y:102, x:33},
{y:102, x:34},
{y:102, x:37},
{y:102, x:39},
{y:102, x:40},
{y:102, x:42},
{y:102, x:45},
{y:103, x:17},
{y:103, x:18},
{y:103, x:21},
{y:103, x:22},
{y:103, x:23},
{y:103, x:24},
{y:103, x:29},
{y:103, x:31},
{y:103, x:38},
{y:103, x:40},
{y:103, x:42},
{y:103, x:46},
{y:104, x:17},
{y:104, x:18},
{y:104, x:21},
{y:104, x:22},
{y:104, x:25},
{y:104, x:46},
{y:105, x:17},
{y:105, x:18},
{y:105, x:26},
{y:105, x:43},
{y:105, x:45},
{y:106, x:17},
{y:106, x:18},
{y:106, x:21},
{y:106, x:22},
{y:106, x:26},
{y:106, x:45},
{y:107, x:17},
{y:107, x:18},
{y:107, x:21},
{y:107, x:22},
{y:107, x:23},
{y:107, x:24},
{y:107, x:25},
{y:107, x:27},
{y:107, x:43},
{y:108, x:17},
{y:108, x:18},
{y:108, x:26},
{y:108, x:27},
{y:108, x:28},
{y:108, x:43},
{y:108, x:44},
{y:108, x:45},
{y:109, x:17},
{y:109, x:18},
{y:109, x:21},
{y:109, x:22},
{y:109, x:23},
{y:109, x:24},
{y:109, x:25},
{y:109, x:27},
{y:109, x:42},
{y:109, x:43},
{y:109, x:46},
{y:110, x:17},
{y:110, x:18},
{y:110, x:21},
{y:110, x:22},
{y:110, x:26},
{y:110, x:42},
{y:110, x:44},
{y:110, x:45},
{y:110, x:46},
{y:111, x:17},
{y:111, x:18},
{y:111, x:26},
{y:111, x:47},
{y:112, x:17},
{y:112, x:18},
{y:112, x:21},
{y:112, x:22},
{y:112, x:25},
{y:112, x:46},
{y:112, x:47},
{y:112, x:48},
{y:113, x:17},
{y:113, x:18},
{y:113, x:21},
{y:113, x:22},
{y:113, x:23},
{y:113, x:24},
{y:113, x:44},
{y:113, x:47},
{y:113, x:48},
{y:113, x:49},
{y:114, x:17},
{y:114, x:18},
{y:114, x:48},
{y:115, x:17},
{y:115, x:18},
{y:115, x:21},
{y:115, x:22},
{y:115, x:23},
{y:115, x:24},
{y:115, x:44},
{y:115, x:45},
{y:115, x:46},
{y:115, x:47},
{y:116, x:17},
{y:116, x:18},
{y:116, x:21},
{y:116, x:22},
{y:116, x:25},
{y:116, x:47},
{y:117, x:17},
{y:117, x:18},
{y:117, x:26},
{y:117, x:44},
{y:117, x:45},
{y:118, x:17},
{y:118, x:18},
{y:118, x:24},
{y:118, x:27},
{y:118, x:42},
{y:118, x:43},
{y:118, x:44},
{y:118, x:45},
{y:119, x:18},
{y:119, x:25},
{y:119, x:27},
{y:119, x:29},
{y:119, x:30},
{y:119, x:42},
{y:120, x:18},
{y:120, x:20},
{y:120, x:30},
{y:121, x:20},
{y:121, x:21},
{y:121, x:22},
{y:121, x:30},
{y:122, x:19},
{y:122, x:22},
{y:122, x:23},
{y:122, x:32},
{y:123, x:21},
{y:123, x:32},
{y:123, x:34},
{y:123, x:35},
{y:124, x:21},
{y:124, x:23},
{y:124, x:35},
{y:125, x:23},
{y:125, x:32},
{y:125, x:33},
{y:125, x:35},
{y:126, x:23},
{y:126, x:24},
{y:126, x:25},
{y:126, x:26},
{y:127, x:25},
{y:127, x:26},
{y:127, x:35},
{y:127, x:37},
{y:128, x:28},
{y:128, x:35},
{y:128, x:38},
{y:129, x:25},
{y:129, x:26},
{y:129, x:27},
{y:129, x:28},
{y:129, x:38},
{y:129, x:39},
{y:130, x:29},
{y:130, x:40},
{y:131, x:25},
{y:131, x:28},
{y:131, x:29},
{y:131, x:30},
{y:131, x:38},
{y:131, x:39},
{y:131, x:40},
{y:131, x:41},
{y:132, x:27},
{y:132, x:28},
{y:132, x:29},
{y:132, x:37},
{y:132, x:42},
{y:133, x:28},
{y:133, x:39},
{y:133, x:42},
{y:134, x:23},
{y:134, x:25},
{y:134, x:26},
{y:134, x:27},
{y:134, x:39},
{y:134, x:42},
{y:135, x:23},
{y:135, x:24},
{y:135, x:27},
{y:135, x:41},
{y:136, x:24},
{y:136, x:25},
{y:136, x:26},
{y:136, x:35},
{y:136, x:37},
{y:136, x:38},
{y:136, x:39},
{y:136, x:40},
{y:137, x:24},
{y:137, x:35},
{y:137, x:39},
{y:138, x:26},
{y:138, x:38},
{y:139, x:24},
{y:139, x:26},
{y:139, x:36},
{y:139, x:38},
{y:140, x:27},
{y:141, x:24},
{y:141, x:26},
{y:141, x:37},
{y:141, x:38},
{y:141, x:39},
{y:142, x:26},
{y:142, x:38},
{y:142, x:39},
{y:143, x:24},
{y:143, x:37},
{y:143, x:38},
{y:143, x:39},
{y:144, x:24},
{y:144, x:25},
{y:144, x:26},
{y:145, x:23},
{y:145, x:24},
{y:145, x:27},
{y:145, x:36},
{y:145, x:38},
{y:146, x:23},
{y:146, x:25},
{y:146, x:26},
{y:146, x:27},
{y:146, x:38},
{y:147, x:28},
{y:147, x:35},
{y:147, x:39},
{y:148, x:27},
{y:148, x:28},
{y:148, x:29},
{y:148, x:35},
{y:148, x:37},
{y:148, x:38},
{y:148, x:39},
{y:148, x:40},
{y:149, x:25},
{y:149, x:28},
{y:149, x:29},
{y:149, x:30},
{y:149, x:41},
{y:150, x:29},
{y:150, x:39},
{y:150, x:42},
{y:151, x:25},
{y:151, x:26},
{y:151, x:27},
{y:151, x:28},
{y:151, x:39},
{y:151, x:42},
{y:152, x:28},
{y:152, x:37},
{y:152, x:42},
{y:153, x:25},
{y:153, x:26},
{y:153, x:38},
{y:153, x:39},
{y:153, x:40},
{y:153, x:41},
{y:154, x:23},
{y:154, x:24},
{y:154, x:25},
{y:154, x:26},
{y:154, x:40},
{y:155, x:23},
{y:155, x:38},
{y:155, x:39},
{y:156, x:35},
{y:156, x:38},
{y:157, x:35},
{y:157, x:37},
	];
}


// RULES
function rule(branches, a1, a2, a3, a4, a5, a6, a7, a8) {
	// GAME OF LIFE
	//
	// | a1 | a2 | a3 |
	// | a4 | $v | a5 |
	// | a6 | a7 | a8 |
	//
	// Each of the aX variables is 0 or 1.

	// Figure out how many cells around this cell are "alive" (1).
	var count = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8;

	// For cells that are alive, these rules decide if it should be alive or dead next.
	var liveResult;
	if (count < 2) {
		liveResult = false;
	} else if (count > 3) {
		liveResult = false;
	} else {
		liveResult = true;
	}
	branches.push({ case: { $and: [ { $eq: [ "$v", true  ] }, { $eq: [ "$prev", "" + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 ] } ] }, then: liveResult });

	// For cells that are dead, this rule decides if it should be alive or dead next.
	var deadResult = (count == 3);
	branches.push({ case: { $and: [ { $eq: [ "$v", false ] }, { $eq: [ "$prev", "" + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 ] } ] }, then: deadResult });
}



//////////////////////////////////////////////////////////////////////////

// Setup the blank grid
coll.drop()
var init = [];
var v = false;
for (var x = 0; x < MAX_X; x++) {
	for (var y = 0; y < MAX_Y; y++) {
		init.push( { _id: { y, x }, v } );
	}
}
coll.insert(init);

var initState = setupInitialConditions();
for (let point in initState) {
	coll.update({_id: initState[point]}, {$set:{v:true}});
}


function disp() {
	var img = [];
	for (var y = 0; y < MAX_Y; y++) {
		img[y] = [];
	}
	coll.find().forEach( (doc) => {
		img[doc._id.y][doc._id.x] = doc.v;
	});
    var s = "";
	for (var y = 0; y < MAX_Y; y++) {
		s += img[y].map((x)=>x?"#":" ").join("") + "\n";
	}
    return s;
}

print(disp());

var branches = [];
// Rules for the edges, leave these alone.
branches.push({ case: { $eq: [ "$_id.y",  0 ] }, then: "$v" });
branches.push({ case: { $eq: [ "$_id.y", MAX_Y-1 ] }, then: "$v" });
branches.push({ case: { $eq: [ "$_id.x",  0 ] }, then: "$v" });
branches.push({ case: { $eq: [ "$_id.x", MAX_X-1 ] }, then: "$v" });

// Rules for each case.
for (var a1 = 0; a1 <= 1; a1++) {
	for (var a2 = 0; a2 <= 1; a2++) {
		for (var a3 = 0; a3 <= 1; a3++) {
			for (var a4 = 0; a4 <= 1; a4++) {
				for (var a5 = 0; a5 <= 1; a5++) {
					for (var a6 = 0; a6 <= 1; a6++) {
						for (var a7 = 0; a7 <= 1; a7++) {
							for (var a8 = 0; a8 <= 1; a8++) {
								rule(branches, a1, a2, a3, a4, a5, a6, a7, a8);
							}
						}
					}
				}
			}
		}
	}
}

//printjson(branches);

for (var time = 0; time < MAX_TIME; time++) {
	var start = Date.now();
	var res = db.runCommand({aggregate: coll.getName(), pipeline: [

		{ "$addFields": {
			prev_y: { "$add": [ "$_id.y", -1 ] },
			next_y: { "$add": [ "$_id.y",  1 ] },
			prev_x: { "$add": [ "$_id.x", -1 ] },
			next_x: { "$add": [ "$_id.x",  1 ] },
		} },

		{ "$addFields": {
			prev: [
				// top row
				{ y: "$prev_y", x: "$prev_x" },
				{ y: "$prev_y", x: "$_id.x" },
				{ y: "$prev_y", x: "$next_x" },

				// this row
				{ y: "$_id.y", x: "$prev_x" },
				{ y: "$_id.y", x: "$next_x" },

				// bottom row
				{ y: "$next_y", x: "$prev_x" },
				{ y: "$next_y", x: "$_id.x" },
				{ y: "$next_y", x: "$next_x" },
			],
		} },
		{ "$project": {
			prev_y: 0,
			next_y: 0,
			prev_x: 0,
			next_x: 0,
		} },

		{ "$unwind": "$prev" },

		{ "$lookup": {
			from: coll.getName(),
			localField: "prev",
			foreignField: "_id",
			as: "prev",
		} },

		{ "$group": {
			_id: "$_id",
			v: { $first: "$v" },
			prev: { $push: "$prev.v" },
		} },

		{ "$addFields": {
			prev: { $reduce: {
				input: "$prev",
				initialValue: "",
				in: { $concat: [
					"$$value",
					{ $cond: {
						if: { $reduce: {
							input: "$$this",
							initialValue: null,
							in: "$$this"
						} },
						then: "1",
						else: "0",
					} },
				] },
			} },
		} },

		{ "$project": {
			_id: 1,
			v: { $switch: {
				branches: branches,
				default: "$v",
			} },
		} },

		{ "$out": coll.getName() }
	] , cursor: { } } );
	if ( ! res.ok) shellPrint(res);
	var end = Date.now();
	var diff = end - start;
	var display = disp();
	print(display);
	print(time, "" + diff + "ms");
}
