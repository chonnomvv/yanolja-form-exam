# 초기설정
1. fork 한다.
2. fork한 repo(자기 repo)에서 `git clone [git주소]` 명령어로 clone 받는다.
3. 자신의 폴더로 들어가서 `npm i` 명령어로 패키지 다운
4. `git flow init` 명령어로 flow 초기 설정(모든 것 Enter)
5. `git remote add rmorigin https://github.com/tastyloper/yanolja-form-exam.git` 명령어로 리모트를 fork했던 주소로 하나 만들어 준다.

# 작업시작
1. [develop] 최신 상태로 만들기 위해 fork했던 주소에 데이터를 가져온다.
   1. `git fetch rmorigin`
   2. `git merge rmorigin/develop`
2. [develop] `git flow feature start [원하는 브런치 이름]` __(작업전에 무조건!!)__
3. [feature로 만든 브런치] 작업하고 `git add`, `git commit`, `git push -u origin [feature로 만든 브런치]`
4. [feature로 만든 브런치] `git flow feature finish [원하는 브런치 이름]`
   * 만든 feature 브런치가 없어지고 develop에 자동으로 merge 된다.
5. [develop] `git push` 명령어로 merge된 최종 파일들을 develop에 올린다.
6. fork한 repo(자기 repo)에서 **Pull Requests**를 보낸다.(develop -> develop)
