#DUUBULDBFRBFRRULLLBRDFFFBLURDBFDFDRFRULBLUFDURRBLBDUDL
#DUFFURRDL  B UUBRRBDDU
import random
import twophase.solver  as sv
final2 = "Error: Some edges are undefined."
#            0                                   9                                  18                                   27                                  36                                  45                                     
possible = ["U","U","U","U","U","U","U","U","U","R","R","R","R","R","R","R","R","R","F","F","F","F","F","F","F","F","F","D","D","D","D","D","D","D","D","D","L","L","L","L","L","L","L","L","L","B","B","B","B","B","B","B","B","B"]
def move(x, y):
    temp = possible[y]
    possible[y] = possible[x]
    possible[x] = temp
def l():
    move(37,41)
    move(37,43)
    move(37,39)
    move(36,38)
    move(36,44)
    move(36,42)
    move(0,18)
    move(0,27)
    move(0,53)
    move(6,24)
    move(6,33)
    move(6,47)
    move(3,21)
    move(3,30)
    move(3,50)
def uprime():
    move(0,6)
    move(0,8)
    move(0,2)
    move(1,3)
    move(1,7)
    move(1,5)
    move(9,18)
    move(18,36)
    move(36,45)
    move(11,20)
    move(20,38)
    move(38,47)
    move(10,19)
    move(10,37)
    move(10,46)
    move(19,46)
    move(37,10)
def r():
    move(10,14)
    move(10,16)
    move(10,12)
    move(9,11)
    move(9,17)
    move(9,15)
    move(20,2)
    move(20,51)
    move(20,29)
    move(8,45)
    move(8,35)
    move(8,26)
    move(23,5)
    move(23,48)
    move(23,32)
l()
uprime()
r()
l()
r()
uprime()
l()
l()
r()
while final2 == "Error: Some edges are undefined." or final2 == "Error: Some corners are undefined.":
    cubestring = 'DUFFURRDLBUUBRRBDDUFULFURDRFLDBDBBRRLRBULFDLULLFBBFFDL'
    corners = ["0", "2"  ,"6" ,"8", "9", "11", "15", "17", "18", "20", "24", "26", "27", "29", "33", "35", "36", "38", "42", "44", "45", "47", "51", "53"]
    solve = sv.solve(cubestring,19,2)
    resr = "DUFFURRDLBUUBRRBDDUFULFURDRFLDBDBBRRLRBULFDLULLFBBFFDL"
    resr = resr.replace("", "\"")
    clean = solve.replace("3", '\'')
    mixer = str(possible)
    final = mixer.replace("\'", "")
    final = final.replace(",", "")
    final = final.replace("[", "")
    final =  final.replace("]", "")
    final = final.replace(" ", "")
    print()
    final2 = sv.solve(final)
    print(final)
final2 = final2.replace("3", '\'')
final2 = final2.replace("1", '')

print(final2)
