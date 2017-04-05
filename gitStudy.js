git init // 新建
git add // 新添文件到仓库
git commit -m 'xxx' // -m 添加提交备注
//为什么Git添加文件需要add，commit一共两步呢？因为commit可以一次提交很多文件，所以你可以多次add不同的文件
git status // 查看仓库文件状态
git diff <fileName> // 查看修改内容
git log // 查看版本记录
git log --pretty=oneline // 简略查看版本记录
git reset --hard HEAD // 上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
git reset --hard // 回滚版本库
git reflog // 记录命令
git checkout -- <fileName> // 将文件在工作区的修改全部撤销
git reset HEAD <fileName> // 可以吧暂存区的修改回退到工作区 使用HEAD时 表示最新版本
rm <fileName> // 删除文件
git rm <fileName> 并 git commot <fileName> // 从版本库中删除文件
git checkout -- <fileName> // 用版本库里的版本替换工作区的版本 == 一键还原
git remote add origin git@server-name:path/repo-name.git // 关联远程仓库
git push -u origin master // 第一次推送master分支的所有内容
git push origin master // 推送最新修改
git checkout -- <fileName> // 用版本库里的版本替换工作区的版本 == 一键还原
git clone github@url // 从远程库拷贝项目到本地文件夹
git checkout -b <name> === git branch <name>, git checkout <name> // 创建新分支 <name> 并切换到新分支
git branch // 查看所有分支 当前分支前 * 标记
git merge <name> // 合并分支 指定分支内容 合并到当前分支 ---> <name>(目前指定分支)
git branch -d <name> // 删除指定分支 <name>(目前指定分支) Fast-forward(快进模式) 直接把master指向<name>的当前提交
git log --graph // 查看分支合并图
// Fast forward模式 删除分支后 会丢掉分支信息
git merge --no-ff -m "XXX" <name> // --no-ff参数，表示禁用Fast forward -m参数 把commit描述写进去
git stash // 把当前工作现场“储藏”起来 恢复现场后继续工作 
git stash list // 查看"储藏"起来的工作现场
git stash apply  // 恢复工作现场后 不删除记录
git stash drop // 删除储藏现场的记录
git stash pop // 恢复 并删除记录
git stash apply stash@{0} // 可以多次stash 并可以恢复指定stash
