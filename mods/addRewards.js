// Author: GooseterV
// Description: This mod will give you 500 tokens and 300 xp.
// Title: Add Rewards
module.exports = {
	dependencies: [],
	styles: false,
	author: "Goose V",
	name: "Add Rewards",
	description: "This mod can add your daily tokens and daily xp in one click.",
	image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDUwIDUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPGcgaWQ9ImNvaW5fNCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMjk5ODI4LDAuMDA4MDMzODcsLTAuMDA4MDMzODcsMC4wMjk5ODI4LDQuNDIzMzQsLTE0LjcyNjYpIj4KICAgICAgICA8Zz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45ODE3ODksLTAuMTg5OTcyLDAuMTg5OTcyLDAuOTgxNzg5LC0xNzEuNTc3LDIwOC4xNDcpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzUuMTc3LDEzNjIuMThMNDkxLjk2NSw1NTEuODkxQzUwNy44MzgsNDY5Ljg2MSA1OTkuNTI0LDQxOC41MTMgNjk2LjU4OCw0MzcuMjk1TDE0OTEuNjMsNTkxLjEzMUwxNTgyLjc3LDUzMC4zNjFMMTY4OS4zNCw2NzguNThDMTcxMy40Myw3MTAuNzc0IDE3MjQuNDQsNzQ5LjgxOSAxNzE2Ljg3LDc4OC45MDZMMTUzNy4yNCwxNzE3LjI2QzE1MjEuMzcsMTc5OS4yOSAxNDI5LjY4LDE4NTAuNjQgMTMzMi42MiwxODMxLjg2TDQ1OS40MzcsMTY2Mi45QzQwNy4wMjMsMTY1Mi43NiAzNjMuNjkyLDE2MjQuMjMgMzM3LjQxMywxNTg3LjJMMzM3LjQxMiwxNTg3LjJMMjI3LjMzNiwxNDM0LjA4TDMzNS4xNzcsMTM2Mi4xOFoiIHN0eWxlPSJmaWxsOiNiZTkzMDA7Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45ODE3ODksLTAuMTg5OTcyLDAuMTg5OTcyLDAuOTgxNzg5LC0xNzEuNTc3LDIwOC4xNDcpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjA4Ljg5LDE3NDAuMTNMMTI4MS41MywxNzU0LjE4QzEzMDIuNSwxNzU4LjI0IDEzMjMuMiwxNzU4LjkyIDEzNDIuODksMTc1Ni42NUwxMzg2Ljc4LDE4MTIuODFDMTM2NS45OSwxODE1LjYxIDEzNDQuMDIsMTgxNS4xIDEzMjEuNzYsMTgxMC43OUwxMjUzLjg0LDE3OTcuNjVMMTIwOC44OSwxNzQwLjEzWk0xNDczLjIzLDE2NjUuOTZMMTUxNC43OCwxNzE5LjEzQzE1MDEuMDMsMTc1Ni41MyAxNDcwLjA5LDE3ODUuNTYgMTQzMC42OSwxODAxLjM0TDEzODcuMzksMTc0NS45M0MxNDI3LjAzLDE3MzAuOSAxNDU4LjUsMTcwMi42NCAxNDczLjIzLDE2NjUuOTZaTTExNDYuNTksMTcyOC4wN0wxMTkxLjU0LDE3ODUuNkwxMDY5Ljg4LDE3NjIuMDZMMTAyNC45MywxNzA0LjUzTDExNDYuNTksMTcyOC4wN1pNOTYyLjYzMiwxNjkyLjQ4TDEwMDcuNTgsMTc1MEw4ODQuNjk2LDE3MjYuMjJMODM5Ljc0NCwxNjY4LjdMOTYyLjYzMiwxNjkyLjQ4Wk03NzcuNDQ1LDE2NTYuNjRMODIyLjM5NywxNzE0LjE3TDY5My45MTQsMTY4OS4zMUw2NDguOTYzLDE2MzEuNzhMNzc3LjQ0NSwxNjU2LjY0Wk01ODYuNjY0LDE2MTkuNzNMNjMxLjYxNSwxNjc3LjI1TDUxNy40MTYsMTY1NS4xNkw0NzIuNDY0LDE1OTcuNjNMNTg2LjY2NCwxNjE5LjczWk0xNTUwLjg0LDE1NDEuMzJMMTUyNi42LDE2NjYuNTlMMTQ4NS41OCwxNjE0LjA5TDE1MDkuODIsMTQ4OC44MkwxNTUwLjg0LDE1NDEuMzJaTTQ1NC4wNzIsMTY0MS43NkM0MTIuNjQ5LDE2MjkuMTcgMzc2LjE4NiwxNjE0LjI1IDM1NC4yODIsMTU4My4zOUwzNTQuMjgyLDE1ODMuMzlMMzA2LjUxNiwxNTE2Ljk1TDMwNi45NjYsMTUxNi45MkMzMjcuOTE5LDE1NDYuNDQgMzY5LjQ4MSwxNTcwLjM5IDQwOC41MDIsMTU4My40NUw0NTQuMDcyLDE2NDEuNzZaTTE1ODQuNiwxMzY2Ljg1TDE1NjEuMzQsMTQ4Ny4wOEwxNTIwLjMxLDE0MzQuNThMMTU0My41OCwxMzE0LjM1TDE1ODQuNiwxMzY2Ljg1Wk0xNjE5LjgyLDExODQuODRMMTU5NS4xLDEzMTIuNjFMMTU1NC4wNywxMjYwLjExTDE1NzguNzksMTEzMi4zNEwxNjE5LjgyLDExODQuODRaTTE2NTUuMTEsMTAwMi40NUwxNjMwLjMxLDExMzAuNkwxNTg5LjI5LDEwNzguMUwxNjE0LjA4LDk0OS45NTRMMTY1NS4xMSwxMDAyLjQ1Wk0xNjg3LjQxLDgzNS40OTJMMTY2NS42LDk0OC4yMTRMMTYyNC41OCw4OTUuNzE0TDE2NDYuMzksNzgyLjk5M0wxNjg3LjQxLDgzNS40OTJaTTE2NTYuMTUsNzI3LjgxMUMxNjU4LjE1LDY5OS43MTIgMTY1MC41OCw2NTYuNzg5IDE2MzUuNjIsNjMyLjQxTDE2NjcuNyw2NzcuMDM0QzE3MDEuNDksNzIyLjE4MiAxNjk3LjY1LDc0OC40NzQgMTY5Ni42Myw3NzkuNjEzTDE2NTYuMTUsNzI3LjgxMVoiIHN0eWxlPSJmaWxsOiNhYjgzMDA7Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45ODE3ODksLTAuMTg5OTcyLDAuMTg5OTcyLDAuOTgxNzg5LC0xNzEuNTc3LDIwOC4xNDcpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDM0LjE0LDE4MjYuMDVDMTQyOC40OCwxODI3LjkxIDE0MjIuNjgsMTgyOS41MiAxNDE2Ljc1LDE4MzAuODdMMTIzNS41OSwxNTk5LjAzTDEyNDguNzIsMTU4OC43N0wxNDM0LjE0LDE4MjYuMDVaTTEyNTIuNjEsMTgxNi4zOEwxMjI3LjY5LDE4MTEuNTZMMTA2MS42MiwxNTk5LjAzTDEwNzQuNzUsMTU4OC43N0wxMjUyLjYxLDE4MTYuMzhaTTEwNjguNjUsMTc4MC43OEwxMDQzLjczLDE3NzUuOTZMOTA1LjQ3MywxNTk5LjAzTDkxOC42MDYsMTU4OC43N0wxMDY4LjY1LDE3ODAuNzhaTTg4My40NjYsMTc0NC45NUw4NTguNTQ2LDE3NDAuMTNMNjk1LjI5NywxNTMxLjIyTDcwOC40MywxNTIwLjk1TDg4My40NjYsMTc0NC45NVpNMTUzOS44NCwxNzAzLjgzTDE1MzcuMjQsMTcxNy4yNkMxNTM2LjcyLDE3MTkuOTYgMTUzNi4xMSwxNzIyLjYzIDE1MzUuNDMsMTcyNS4yNkwxMzQ4LjUzLDE0ODYuMDhMMTM2MS42NiwxNDc1LjgyTDE1MzkuODQsMTcwMy44M1pNNjkyLjY4NSwxNzA4LjA0TDY2Ny43NjUsMTcwMy4yMUw0ODguNTgxLDE0NzMuOTFMNTAxLjcxNCwxNDYzLjY1TDY5Mi42ODUsMTcwOC4wNFpNNTE2LjE4NiwxNjczLjg4TDQ5MS4yNjcsMTY2OS4wNkwzMDguMDYzLDE0MzQuNjFMMzIxLjE5NSwxNDI0LjM1TDUxNi4xODYsMTY3My44OFpNMTU3NC41NywxNTI0LjMyTDE1NzAuMzgsMTU0Ni4wMkwxNDQ2Ljc3LDEzODcuODRMMTQ1OS45MSwxMzc3LjU4TDE1NzQuNTcsMTUyNC4zMlpNMTYwOC4zMywxMzQ5Ljg1TDE2MDQuMTMsMTM3MS41NUwxNDQ2Ljc3LDExNzAuMTdMMTQ1OS45MSwxMTU5LjlMMTYwOC4zMywxMzQ5Ljg1Wk0xNjQzLjU1LDExNjcuODRMMTYzOS4zNSwxMTg5LjU0TDE0NzYuNzMsOTgxLjQyNEwxNDg5Ljg2LDk3MS4xNjJMMTY0My41NSwxMTY3Ljg0Wk0xNjc4Ljg0LDk4NS40NTZMMTY3NC42NCwxMDA3LjE1TDE1MTYuNyw4MDUuMDIzTDE1MjkuODMsNzk0Ljc2MUwxNjc4Ljg0LDk4NS40NTZaTTE3MTEuMTUsODE4LjQ5NUwxNzA2Ljk1LDg0MC4xOUwxNTE2LjcsNTk2LjcxOUwxNTI5LjgzLDU4Ni40NTdMMTcxMS4xNSw4MTguNDk1WiIgc3R5bGU9ImZpbGw6IzdiNWYwMDsiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjk4MTc4OSwtMC4xODk5NzIsMC4xODk5NzIsMC45ODE3ODksLTE3MS41NzcsMjA4LjE0NykiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1NDEuOSwxNjkzLjE5TDE1MzcuMjQsMTcxNy4yNkMxNTMxLjI0LDE3NDguMjggMTUxNC40LDE3NzQuOTEgMTQ5MC41MywxNzk1LjAxTDEyOTkuNiwxNTUxLjMxTDEzMTguOTUsMTQwOC4zTDE1NDEuOSwxNjkzLjE5Wk0xNjI1LjY3LDEyNjAuMjNMMTQwMi42Nyw5NzUuNjEyTDEzMjcuMzQsMTM2NC45N0wxNTUwLjMzLDE2NDkuNTlMMTYyNS42NywxMjYwLjIzWiIgc3R5bGU9ImZpbGw6I2ZmZjhjMDtmaWxsLW9wYWNpdHk6MC4yNTsiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgyLjU0Nzk2ZS0xNiwtNC4xNjExNCw0LjkyMzc0LDMuMDE0OTJlLTE2LDU3LjY0MjMsMTYyNC4xNykiPgogICAgICAgICAgICA8Y2xpcFBhdGggaWQ9Il9jbGlwMSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAwLDgxLjM4QzMwMCw2MS4zMDEgMjgzLjY5OSw0NSAyNjMuNjIsNDVMMzYuMzgsNDVDMTYuMzAxLDQ1IDAsNjEuMzAxIDAsODEuMzhMMCwyNjIuMDFDMCwyODIuMDg5IDE2LjMwMSwyOTguMzkgMzYuMzgsMjk4LjM5TDI2My42MiwyOTguMzlDMjgzLjY5OSwyOTguMzkgMzAwLDI4Mi4wODkgMzAwLDI2Mi4wMUwzMDAsODEuMzhaIi8+CiAgICAgICAgICAgIDwvY2xpcFBhdGg+CiAgICAgICAgICAgIDxnIGNsaXAtcGF0aD0idXJsKCNfY2xpcDEpIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDIuMDAzOCw2LjMyMDA0LC03LjQ3ODMsMS42OTM0NSwyNzEuMzI1LC0xNC43MjM5KSI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjX0ltYWdlMiIgeD0iMC44MzkiIHk9IjAiIHdpZHRoPSI0NS4yNzhweCIgaGVpZ2h0PSI0NS4wMjFweCIgdHJhbnNmb3JtPSJtYXRyaXgoMC45ODQzMDMsMCwwLDAuOTc4NzIxLDAsMCkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBkPSJNMTUyNi44NCwxNDU4LjQxTDI3OS4yMTEsOTMxLjIwN0wyNzkuMjExLDEwNTEuOTlMMTQ5MC43MSwxNTYzLjkzQzE1MTMuMzksMTUzOC41NyAxNTI2Ljg0LDE1MDcgMTUyNi44NCwxNDcyLjc5TDE1MjYuODQsMTQ1OC40MVpNMjgzLjk2Miw0OTIuNDU3QzI4MC44NTQsNTAzLjYyMSAyNzkuMjExLDUxNS4yNTUgMjc5LjIxMSw1MjcuMjExTDI3OS4yMTEsODg3LjAwMUwxNTI2Ljg0LDE0MTQuMkwxNTI2Ljg0LDEwMTcuNjVMMjgzLjk2Miw0OTIuNDU3WiIgc3R5bGU9ImZpbGw6I2ZmZjljNDtmaWxsLW9wYWNpdHk6MC4yNTsiLz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMi4wMjQ5MmUtMTYsLTMuMzA2OTQsMy45MTMsMi4zOTYwMmUtMTYsMjE0LjE4MiwxNTA3LjY5KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAwLDgxLjM4QzMwMCw2MS4zMDEgMjgzLjY5OSw0NSAyNjMuNjIsNDVMMzYuMzgsNDVDMTYuMzAxLDQ1IDAsNjEuMzAxIDAsODEuMzhMMCwyNjIuMDFDMCwyODIuMDg5IDE2LjMwMSwyOTguMzkgMzYuMzgsMjk4LjM5TDI2My42MiwyOTguMzlDMjgzLjY5OSwyOTguMzkgMzAwLDI4Mi4wODkgMzAwLDI2Mi4wMUwzMDAsODEuMzhaIiBzdHlsZT0iZmlsbDojZDY5NjA3OyIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTgxNzg5LC0wLjE4OTk3MiwwLjE4OTk3MiwwLjk4MTc4OSwtMTcxLjU3NywyMDguMTQ3KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzM1LjQ4NCwxMzI4LjU0QzMzNS44NTksMTMyOS4zOCAzMzYuMjQzLDEzMzAuMiAzMzYuNjM3LDEzMzEuMDNMMzM2Ljk2OSwxMzMxLjcyQzMzNy4wODEsMTMzMS45NSAzMzcuMTkzLDEzMzIuMTggMzM3LjMwNSwxMzMyLjQxTDMzNy4zMjYsMTMzMi40NUMzMzguNiwxMzM1LjAzIDMzOS45NzMsMTMzNy41OCAzNDEuNDQxLDEzNDAuMDlDMzQyLjM1MywxMzQxLjY1IDM0My4zLDEzNDMuMTkgMzQ0LjI4MiwxMzQ0LjcxQzM0NC43OTUsMTM0NS41MSAzNDUuMzE5LDEzNDYuMyAzNDUuODUyLDEzNDcuMDlDMzQ3LjAxNiwxMzQ4LjgxIDM0OC4yMjgsMTM1MC41MiAzNDkuNDg1LDEzNTIuMTlDMzUxLjYzMiwxMzU1LjA2IDM1My45MDgsMTM1Ny44NiAzNTYuMzA4LDEzNjAuNThDMzU2LjkyNCwxMzYxLjI4IDM1Ny41NDksMTM2MS45NyAzNTguMTgxLDEzNjIuNjZMMzU4LjYyOSwxMzYzLjE1QzM1OC44MTIsMTM2My4zNCAzNTguOTk0LDEzNjMuNTQgMzU5LjE3NiwxMzYzLjc0TDM1OS43MjYsMTM2NC4zMkwzNTkuOTk0LDEzNjQuNkMzNjIuMjMyLDEzNjYuOTQgMzY0LjU2MywxMzY5LjIzIDM2Ni45ODQsMTM3MS40NEwzNjcuMjI4LDEzNzEuNjZMMzY3LjgzMSwxMzcyLjIxQzM2OS42NSwxMzczLjg0IDM3MS41MTUsMTM3NS40MyAzNzMuNDI4LDEzNzYuOTlMMzczLjQ0MSwxMzc3QzM3Ny4xOTMsMTM4MC4wNSAzODEuMTMyLDEzODIuOTQgMzg1LjI0NCwxMzg1LjY3QzM4NS45NzksMTM4Ni4xNiAzODYuNzI1LDEzODYuNjQgMzg3LjQ3NiwxMzg3LjEyQzM4OS42MzMsMTM4OC41IDM5MS44MzcsMTM4OS44MyAzOTQuMDg0LDEzOTEuMTFDMzk0LjY3LDEzOTEuNDUgMzk1LjI1NywxMzkxLjc4IDM5NS44NDYsMTM5Mi4xQzM5OC42NTMsMTM5My42NiA0MDEuNTIxLDEzOTUuMTMgNDA0LjQ1MSwxMzk2LjUzTDQwNC43NjMsMTM5Ni42OEw0MDUuNTQ2LDEzOTcuMDVDNDA1LjgwOCwxMzk3LjE3IDQwNi4wNywxMzk3LjI5IDQwNi4zMzIsMTM5Ny40MUw0MDcuMTIxLDEzOTcuNzhDNDA4LjkzNywxMzk4LjYgNDEwLjc4MywxMzk5LjQgNDEyLjY1MSwxNDAwLjE3TDQxMi43MjMsMTQwMC4yTDQxMy4xMjksMTQwMC4zNkM0MTguMTIyLDE0MDIuNCA0MjMuMjY5LDE0MDQuMjEgNDI4LjU2LDE0MDUuNzdMNDI4LjYwNywxNDA1Ljc5TDQyOS40NjksMTQwNi4wNEM0MjkuNzU3LDE0MDYuMTIgNDMwLjA0NSwxNDA2LjIgNDMwLjMzNCwxNDA2LjI5TDQzMS4yMDEsMTQwNi41M0w0MzIuMDcsMTQwNi43N0M0MzYuMTMyLDE0MDcuODggNDQwLjI3OCwxNDA4Ljg0IDQ0NC40OTcsMTQwOS42Nkw1MjguMzE4LDE0MjUuODhDNDUxLjE3OSwxNDEwLjk1IDM5OC43OTYsMTM0NS45MSA0MTEuNDEsMTI4MC43Mkw1NDEuNzA5LDYyNi43NUM1NTUuMzg1LDU1Ny4zMjYgNTc4LjUzNyw1MzYuMzkgNjU2LjYyNyw1NTEuOTQ0TDE0NDUuNTgsNzAwLjJDMTQ0OC4yOSw2NDAuMjY1IDEzOTguMTYsNTgzLjcwNiAxMzI2LjksNTY5LjkxOEwxMjg1LjI3LDU2MS44NjJMMTI4NS4xNSw1NjEuODUyTDYzMi45NjUsNDM1LjY0NEM1NTUuODI3LDQyMC43MTggNDgyLjk2Miw0NjEuNTI2IDQ3MC4zNDgsNTI2LjcxN0wzMjcuNTksMTI2NC41QzMyMy4zMzIsMTI4Ni41IDMyNi40NzksMTMwOC40OSAzMzUuNDg0LDEzMjguNTRaIiBzdHlsZT0iZmlsbDojYjQ4YTAwOyIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsLTEuODkyNSwyMS40Nzk1KSI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTgxNzg5LC0wLjE4OTk3MiwwLjE4OTk3MiwwLjk4MTc4OSwtMTY5LjY4NCwxODYuNjY4KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTkxLjg1MiwxMjMwLjI4TDY5NC45NjMsNjk3LjM5N0M3MDMuMTc4LDY3MS4zMDYgNzU3LjU0Myw2NjkuMDEgODMzLjMxNSw2NzcuNzVDOTA5LjE1LDY4Ni41MTcgOTg2LjExNiw3MDAuMTc5IDEwNjMuNzYsNzE2Ljc1NkMxMDk1LjAxLDcyMy42MzcgMTEyMy44OCw3MzEuNjIxIDExNDkuODgsNzQwLjk0MkwxMjE4LjgyLDczOS40MDNMMTI3NC41OSw4MjAuMzMxQzEyNzguNTcsODI1LjQxIDEyODIuMTYsODMwLjYyMSAxMjg1LjM2LDgzNS45NTZMMTI4NS4zNiw4MzUuOTU2TDEyODUuMzYsODM1Ljk1NkMxMzA1LjA0LDg2OC43NCAxMzEwLjM2LDkwNi4zMzggMTMwNS42Miw5NDcuOTRDMTI5Ni40NywxMDI4LjI0IDEyNjQuNDMsMTA5Ni4yOCAxMjA2LjEsMTExNC41MUwxMjM0LjU4LDExNTYuMjNDMTI0MS41NCwxMTY0LjA5IDEyNDcuMzksMTE3Mi42NSAxMjUyLjExLDExODEuOTFMMTI1Mi4xMiwxMTgxLjkyTDEyNTIuMTIsMTE4MS45MkMxMjY1LjEsMTIwNy4zOCAxMjY5LjYzLDEyMzguMTMgMTI2NS42NiwxMjc0LjIyQzEyNTguMiwxMzM4LjA1IDEyNDEuNDgsMTM5NS42NyAxMTk4LjMsMTQzNS42QzExNDguNTEsMTQ4MC45MiAxMDY1Ljg0LDE0OTEuNzMgOTU4LjcxNCwxNDc2Ljg4TDYyNi41NTEsMTQxMi42MUM1OTIuMTY1LDE0MDUuMjkgNTcxLjk2OCwxMzk5IDU2NS42NDMsMTM4Ny43M0w1NjMuNDc0LDEzODcuODJMNDk3Ljc5NCwxMjg3LjIzTDU5MS44NTIsMTIzMC4yOFoiIHN0eWxlPSJmaWxsOiNiNDhhMDA7Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTU2Mi41NTEsMTM0OC40N0w1NjIuNTUxLDY1OC40MDhDNTY1LjY1OSw2MzEuMjMzIDYxOC41OTcsNjE4LjY1IDY5NC42NSw2MTIuODM3Qzc3MC43Nyw2MDcuMDM4IDg0OC45MjksNjA1LjgyOSA5MjguMzA1LDYwNy4zNTVDOTgyLjk4NCw2MDguNzUzIDEwMzEuNDUsNjE0LjYzNiAxMDcxLjQ4LDYyNi42MTVDMTE2Ni4yMyw2NTMuNTk3IDEyMDMuNjYsNzEwLjkzMiAxMjA5LjY4LDc4OC4zODFDMTIxNi43NSw4NzkuMTM1IDExOTIuMzQsOTYwLjEyMSAxMTIxLjU1LDk3OS42MkMxMTg5LjI5LDk5Ni40ODUgMTIyNi4zNywxMDQxLjk0IDEyMzIuNDMsMTExNi4zMUMxMjM3LjI0LDExODAuMzkgMTIzMS43NywxMjQwLjE1IDExOTYuOTYsMTI4Ny41NUMxMTU2LjY4LDEzNDEuNSAxMDc3LjU3LDEzNjcuODMgOTY5LjU4LDEzNzMuNkw2MzEuMjU1LDEzNzMuNkM1ODQuNjIzLDEzNzIuNzIgNTYyLjg1MywxMzY4Ljg5IDU2Mi41NTEsMTM0OC40N1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjMpOyIvPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDEuODkyNSwtMjEuNDc5NSkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwNjIuMzksMTM4Mi45NEw1NjAuNjU4LDExNzAuOTJMNTYwLjY1OCwxMDUwLjE0TDExODkuNiwxMzE1LjlDMTE2MS44NiwxMzQ4LjY4IDExMTguNjEsMTM3MC40MiAxMDYyLjM5LDEzODIuOTRaTTYzNS4yNiw2NDAuOTAzTDEyMDYuMDgsODgyLjExQzExOTcuNzIsOTQwLjg1MiAxMTcwLjc5LDk4Ny4wMTUgMTExOS42NSwxMDAxLjFDMTE4Ny4zOSwxMDE3Ljk2IDEyMjQuNDgsMTA2My40MSAxMjMwLjU0LDExMzcuNzlDMTIzNC40NCwxMTg5LjgyIDEyMzEuNTcsMTIzOS4wMSAxMjExLjcxLDEyODEuMDRMNTYwLjY1OCwxMDA1LjkzTDU2MC42NTgsNjc5Ljg4OEM1NjIuOTAzLDY2MC4yNjcgNTkxLjEyMiw2NDguMjUzIDYzNS4yNiw2NDAuOTAzWiIgc3R5bGU9ImZpbGw6I2ZmZjljNDtmaWxsLW9wYWNpdHk6MC4yNTsiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsLTAuMjgzMTEyLDEuNDk0NDEpIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODEzLjQxNiw5MDcuNjY0TDgxMy40MTYsNzY3LjI2NkM4MjcuNjk4LDc2NC41MTkgODg4LjAwMSw3NjIuNDMxIDkwMi40MzgsNzY3LjI5OEM5NDcuNTQ0LDc4Mi41MDIgOTU3LjA4LDg4NS40NzQgOTAyLjQzOCw5MDcuOTQ2Qzg5MC4yODYsOTEyLjk0NCA4MjguMjkyLDkxMC45NjcgODEzLjQxNiw5MDcuNjY0WiIgc3R5bGU9ImZpbGw6I2I0OGEwMDsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTgxNzg5LC0wLjE4OTk3MiwwLjE4OTk3MiwwLjk4MTc4OSwtMTY5LjY4NCwxODYuNjY4KSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTg3Mi42MzQsOTA4LjA3TDg5NC44NTEsNzkzLjI1QzkwNS40MTIsNzkzLjI2MiA5MzkuNzI3LDc5OC4yMjQgOTYyLjgwNCw4MDMuODJDOTc1LjM3Nyw4NDMuMTg2IDk1OC44ODUsOTA0LjM4MSA5MTUuMDE0LDkxMy4yM0M5MDguNjc2LDkxNC41MDkgODkwLjgxNSw5MTEuODM4IDg3Mi42MzQsOTA4LjA3WiIgc3R5bGU9ImZpbGw6I2Q2OTYwNzsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsLTAuMjgzMTEyLDMwNy44ODgpIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODEzLjQxNiw5MDcuNjY0TDgxMy40MTYsNzY3LjI2NkM4MjcuNjk4LDc2NC41MTkgODg4LjAwMSw3NjIuNDMxIDkwMi40MzgsNzY3LjI5OEM5NDcuNTQ0LDc4Mi41MDIgOTU3LjA4LDg4NS40NzQgOTAyLjQzOCw5MDcuOTQ2Qzg5MC4yODYsOTEyLjk0NCA4MjguMjkyLDkxMC45NjcgODEzLjQxNiw5MDcuNjY0WiIgc3R5bGU9ImZpbGw6I2I0OGEwMDsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTgxNzg5LC0wLjE4OTk3MiwwLjE4OTk3MiwwLjk4MTc4OSwtMTY5LjY4NCwxODYuNjY4KSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTgxNC40MjgsMTIwOC44OEw4MzYuNjQ1LDEwOTQuMDZDODQ3LjIwNSwxMDk0LjA4IDg4MS41MjEsMTA5OS4wNCA5MDQuNTk3LDExMDQuNjNDOTE3LjE3LDExNDQgOTAwLjY3OSwxMjA1LjE5IDg1Ni44MDcsMTIxNC4wNEM4NTAuNDcsMTIxNS4zMiA4MzIuNjA5LDEyMTIuNjUgODE0LjQyOCwxMjA4Ljg4WiIgc3R5bGU9ImZpbGw6I2Q2OTYwNzsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoNC45OTY4MiwwLDAsNC45OTY4MiwzMi40OTgyLDE0Ny44MTQpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNjguODI4LDI5MS40OTdDMjg0LjE3MywyODEuMTU4IDI5MS44NDcsMjczLjQ2OSAyOTEuOTQxLDI1Ny4yODRMMjkxLjMzMSw3OC44OTZDMjkwLjgyNiw2NS4wMyAyODQuMzQ5LDU4LjI2NCAyNzUuMDU4LDUxLjA3QzI4NS42OTQsNTMuOTMgMjk1LjU5Nyw2NC41MTggMjk1LjU1Niw3OC45NzdMMjk1LjU1NiwyNTcuNDU4QzI5NS41NjQsMjc1LjU2MyAyODkuMDgxLDI4NC41MTUgMjY4LjgyOCwyOTEuNDk3WiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyNCk7Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTQuOTk2ODIsMCwwLDQuOTk2ODIsMTc3NS4wMywxNDcuODE0KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjY4LjgyOCwyOTEuNDk3QzI4NC4xNzMsMjgxLjE1OCAyOTEuODQ3LDI3My40NjkgMjkxLjk0MSwyNTcuMjg0TDI5MS4zMzEsNzguODk2QzI5MC44MjYsNjUuMDMgMjg0LjM0OSw1OC4yNjQgMjc1LjA1OCw1MS4wN0MyODUuNjk0LDUzLjkzIDI5NS41OTcsNjQuNTE4IDI5NS41NTYsNzguOTc3TDI5NS41NTYsMjU3LjQ1OEMyOTUuNTY0LDI3NS41NjMgMjg5LjA4MSwyODQuNTE1IDI2OC44MjgsMjkxLjQ5N1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjUpOyIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02NzMuNDU0LDY1NS45MjJDNjM0Ljc3Miw2NjAuNjUxIDU4MS4yMTMsNjY5LjI4MyA1NzkuOTg1LDY4Ny41NTVMNTgwLjEzMSwxMzY0LjU4TDYwMC41MzMsNjk4LjM1M0M1OTkuMjcyLDY4My4wOSA2MjUuNjY1LDY3MC4xMTUgNjczLjQ1NCw2NTUuOTIyWiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyNik7Ii8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5Mzk3LDAuMDM0NzE4NSwtMC4wMzQ3MTg1LDAuOTk5Mzk3LDI5Ljk5OCwtMjguMzkyNSkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTgwMS44MjUsOTI4LjA2NEw4MDEuMDU0LDc4My41NjJMODIwLjMyNSw3NzIuMDJDODA4LjgzLDc3Mi4zMDYgODA4LjQ3Nyw3NzIuMzcxIDgwMS4yMjksNzcyLjczNUM3OTMuOTgsNzczLjEgNzkwLjg4Myw3NzYuNDcgNzkxLjYwOCw3ODMuNDY0TDgwMS44MjUsOTI4LjA2NFoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjcpOyIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDMxLjgxLDY1NS45MjJDMTE0My40NSw2NzEuODA2IDExOTUuMjYsNzM3LjgxNyAxMTkyLjgzLDg0OS4yNjVDMTE3Ny4yOSw3NTMuMjA2IDExMjUuNDUsNjg3LjI0MyAxMDMxLjgxLDY1NS45MjJaIiBzdHlsZT0iZmlsbDojZmZmYmRiOyIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMTExOS4yOCwxMDIzLjc4QzExNzMuNjYsMTAzMy45IDEyMDYuNDQsMTA3OC40IDEyMTUuNjEsMTE2MC40NUMxMTk0LjA3LDEwOTUuMiAxMTYzLjQzLDEwNDYuOSAxMTE5LjI4LDEwMjMuNzhaIiBzdHlsZT0iZmlsbDojZmZmMDgyOyIvPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjM3MTc1LDAsMCwxLjM3MTc1LC0zMzkuMjE5LC00MDguMDU2KSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODgzLjMzNSwxMDg2LjkxQzkxMi45MSwxMDgwLjg1IDkzNC4zMTMsMTA5Mi4zNCA5MzQuMjY2LDExMjMuNjFDOTI2Ljk0NSwxMDk1LjU5IDkwOC4zODQsMTA4Ny4zNSA4ODMuMzM1LDEwODYuOTFaIiBzdHlsZT0iZmlsbDojZmZmMDgyOyIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGltYWdlIGlkPSJfSW1hZ2UyIiB3aWR0aD0iNDZweCIgaGVpZ2h0PSI0NnB4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUM0QUFBQXVDQVlBQUFCWHVTczNBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRDFrbEVRVlJvZ2JWWXU0NFVNUkRzM3AxZ0E0NkFnSWdmSUVCSUNQRTZSRWhBUWtCQVFJTEVIL0g2b3JzTUpBSWtRZ1JDaUlkMFNFZ2c3ZDNlTk1FODNMYXIyNTZadzhtdVBlMXlWM1cxWisrWW5MSDk5VXlJbVlpWWhKaTY3MFRER28xcjZUclI1dHh6OXJDWERoZDhlL1JVeGpDUW9FUUVpSEl5M2ZmL1FjSUUzUDU4SXJiQ0NSbEZTa3JWWUtiTnVSZUxpZGlKLzNnczZGQ1hBSWdWcXhwcS8yYnY1V1FpNW9iamI0OWtzSURBcEN2OURnaDYvYkxaZTFWRndrNzg2ME9acFdTRndtZ3R0MWkzdmpuL0d1WUlGNCsvUEpDcGlZaHJJYjB2eFVKazdINFppT0RFUDk4WFY2bktxMUVLWkpmMFM0TVNaOWtSU1Irc0V4UUZKRTdpekVSQ3hGSHNVSmtDbG5NR3E3Vk04Wk9QOThEZEhWU3h2RGkxR3BhU3RWaTU0dTNPWnM5TUxCU3ZFWGNmWGpVaXJDUjJWRExnU2dXV256Z29OU0xGb05RWkdXVWhqQnRJNVJham1BenlPTGU3bnJXaGVxV1NETmFGY1d5RVVka3ZySlBlZmJpeS9PNnU5UFZZbFpuOUVpdXVicE1hTDVLb3Q2QWtoeFo4dmJSZjRzVGJIZDdnZUp5VEJGTXYrcjdPOFhHLzlCaHFMVXFjKzhURlBUUm43M214NnU2dTdwZHVqN0R5K09tN1MrTDVxKzR0U0dBL1NMRFlMMldzb0xpMC9XZWlzS0drb01STml4SGhmb2xqQldFWTFVZ1NIMVNRUUVBSUpPSjRFU21jeGhxa3B2U0w4cmhFSDJFeWdJOE1WRlVJa0ZIclZXL0JwTUtWL2NKRVJLZHZMNFowUnd1TUMzak9LTWIzOWFqa2tuN3BZNXRNNWtoeGtQZFFCUmluTERaaTVhVmUxaTlNemVYMzNDVSsyR0E0WEdjcnlSeVNTUWtyaXkzdEYrTktiazdmWEJDQy9rNlVkTWtJc0ppREIvc2wvcDdlM1ZHL0VGSFRnYVFIcThSTU1xVWtEY3lwRmxQVllHSmFYLzNFWGVKRnRTMHlhbzZxZ2pCUnZ3Z2c1NUhwUnhQOERjb3ZRRnBYN1FLWnMraVhNWEZYOFpLS0d0UTdYQ2Vaa2dFYksvcWw0VjV4cVFGRlJHQmMrdERybHdxTDlXVFcxNzZQZ2FQaW5BUWpsMlRlaGdkUHNCakNyT3lYenVOQW9VQWtnTmhrMGlSTFpPWmFUQ2RPYmJWQ05wbVNiekZlMWk4VHJ1UmU4ZmtLMlJZcjNDaFYzZzRoNit0SFVYQVQ3c3M4T0VOTksrTmFURDA1NjM0aGZSMFdRVUhRWW91aGM5SG1QRGk4Z0xMT25nTTYzMkpFRS9xRk1zWFQzeFBwd1hPYUVKQXhtdERxbC9XTjN4bXFVdHc2dUpSZ3FRbW40Z1ZNVkpVc3ZEMWNDVmp1cCtucHhweXQ1OGthT3hoNjNpK3RidjdKQUszM21VK0VxSTRNRjU1bjB6eG1kZXN2ekJIK1k1K0lhTFhmUmh0aUlqVGpKMnNhTi9PbFZYNWtqL2FRMDk4SkdHN1JIOTdkV04zZVRsUGNHNnQ5MFZjUHRRY3NaL3BYRVZGUjBsbUtsMFo3ME44SFZVMUlabVZXZDA3TS9HWXBYaHFydThIYzdZSFNzL0luYTQyYy93QmpaOXd4NUtKV0l3QUFBQUJKUlU1RXJrSmdnZz09Ii8+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDE4OS4wNTgsNzIxLjIzNCwtODIzLjc4NywyMTUuOTQxLDgxMC45NDIsNjA2Ljc1MikiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I2Y5ZjA2NTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2ZlYzUwMztzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNCIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMzkxNzllLTE0LDIyNy4yOTYsLTIyNy4yOTYsMS4zOTE3OWUtMTQsMjg0LjYxMiw1My40NTA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIwLjQ3IiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmMzljO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmMDgwO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXI1IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4zOTE3OWUtMTQsMjI3LjI5NiwtMjI3LjI5NiwxLjM5MTc5ZS0xNCwyODQuNjEyLDUzLjQ1MDQpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjAuNDciIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmYzOWM7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmYwODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iX0xpbmVhcjYiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg0LjMzOTNlLTE0LDcwOC42NjEsLTUzNzIuOTQsMy4yODk5OGUtMTMsNjI2LjcxOSw2NTUuOTIyKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZkO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIwLjIiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmY5Y2E7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjAuNDEiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmYzOTc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmYwODA7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iX0xpbmVhcjciIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgzLjU3Nzg3ZS0xNiwxNDQuNTAxLC00NC4zMDE0LDYuNzA4NTFlLTE0LDgwMS40NCw3ODMuNTYyKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZkO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIwLjIiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmZjZTE7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjAuNDEiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmY4YzU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmY3Yjg7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K",
	inputs: [{
		name: "XP Gained",
		type: "number",
	}, {
		name: "Tokens Earned",
		type: "number",
	}],
	run: (tokens=500, xp=300) => {
		axios().get("https://dashboard.blooket.com/api/users/verify-session").then(d=>{
			let n = document.createElement('iframe');
			document.body.append(n);
			window.alert = n.contentWindow.alert.bind(window);
			n.remove();
			try {
				axios().put("https://dashboard.blooket.com/api/users/add-rewards",{name:d.data.name,addedTokens:Math.min(tokens, 500),addedXp:Math.min(xp, 300)});
				alert('Added Rewards!');
			} catch (err) {
				alert('An error occurred!');
				console.log('err ', err);
			};
		});
	},
};