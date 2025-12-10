import React from 'react';
import { SlideCard, SlideTitle, SlideSubtitle } from './SlideCard';
import { 
  CheckCircle, ArrowRight, Shield, Database, 
  RefreshCw, FileText, Users, Lock, 
  Activity, Layers, AlertTriangle, TrendingUp,
  Server, Globe, Cpu, Clock, Search
} from 'lucide-react';

// --- SLIDE 1: Cover ---
export const Slide1 = () => (
  <SlideCard pageNumber={1}>
    <div className="h-full flex flex-col justify-center items-start pl-10">
      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
        立项说明汇报
      </div>
      <h1 className="text-7xl font-bold text-slate-900 leading-tight mb-6">
        数据产权 <br/>
        <span className="text-blue-600">登记系统</span>
      </h1>
      <p className="text-3xl text-slate-500 font-light mb-16 max-w-3xl">
        从首次登记到全生命周期管理的业务规划
      </p>
      
      <div className="border-t border-gray-200 pt-8 w-full max-w-xl">
        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">汇报人</p>
            <p className="font-semibold text-lg">创新发展中心</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">日期</p>
            <p className="font-semibold text-lg">2025-12-12</p>
          </div>
        </div>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 2: Background & Goals ---
export const Slide2 = () => (
  <SlideCard pageNumber={2}>
    <SlideTitle>项目背景与核心目标</SlideTitle>
    <SlideSubtitle>从0启动阶段的必要性与目标</SlideSubtitle>
    
    <div className="grid grid-cols-2 gap-16 mt-12 h-4/5">
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Search className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-800">项目背景</h3>
        </div>
        <ul className="space-y-6 text-lg text-slate-600">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2.5 flex-shrink-0" />
            <span>数据要素市场化加速，亟需规范数据产权登记流程。</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-slate-400 rounded-full mt-2.5 flex-shrink-0" />
            <span>现有体系缺乏全生命周期管理能力，大部分着重于单次登记。</span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white/20 rounded-lg">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold">核心目标</h3>
        </div>
        <ul className="space-y-6 text-lg text-blue-50">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 opacity-80" />
            <span>构建“首次登记为基础，动态管理为延伸”的完整系统。</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 opacity-80" />
            <span>实现数据产权从“登记生效”到“权利终止”的全流程数字化。</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0 opacity-80" />
            <span>支撑机构端与国家平台的无缝对接，满足合规要求。</span>
          </li>
        </ul>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 3: Modules Framework ---
export const Slide3 = () => (
  <SlideCard pageNumber={3}>
    <SlideTitle>核心业务模块框架</SlideTitle>
    <SlideSubtitle>架构：“基础+延伸”两大层</SlideSubtitle>

    <div className="flex flex-col items-center justify-center h-3/4 mt-8">
      {/* Root Node */}
      <div className="w-96 bg-slate-800 text-white p-8 rounded-xl shadow-xl text-center z-10 relative">
        <h4 className="text-3xl font-bold mb-3">基础模块：首次登记</h4>
        <p className="text-slate-300 text-base">核心起点，所有业务的前提</p>
        <div className="absolute -bottom-10 left-1/2 w-0.5 h-10 bg-slate-300 transform -translate-x-1/2"></div>
      </div>

      {/* Branching Lines */}
      <div className="w-[850px] h-0.5 bg-slate-300 mt-10 relative">
        <div className="absolute left-0 top-0 w-0.5 h-8 bg-slate-300"></div>
        <div className="absolute left-1/4 top-0 w-0.5 h-8 bg-slate-300"></div>
        <div className="absolute right-1/4 top-0 w-0.5 h-8 bg-slate-300"></div>
        <div className="absolute right-0 top-0 w-0.5 h-8 bg-slate-300"></div>
      </div>

      {/* Child Nodes */}
      <div className="flex justify-between w-[960px] mt-8 gap-4">
        {[
          { title: "变更登记", desc: "信息更新", sub: "如数据规模、企业名称", color: "bg-blue-50 border-blue-200" },
          { title: "注销登记", desc: "权利终止", sub: "如数据灭失、自愿放弃", color: "bg-red-50 border-red-200" },
          { title: "转让登记", desc: "所有权转移", sub: "如企业间产权过户", color: "bg-green-50 border-green-200" },
          { title: "授权许可登记", desc: "使用权临时转移", sub: "如限时授权使用", color: "bg-purple-50 border-purple-200" }
        ].map((item, idx) => (
          <div key={idx} className={`w-56 ${item.color} border-2 p-5 rounded-lg text-center shadow-sm flex flex-col justify-center`}>
            <h5 className="font-bold text-slate-800 mb-2 text-lg">{item.title}</h5>
            <p className="text-base font-semibold text-slate-600 mb-1">{item.desc}</p>
            <p className="text-sm text-slate-500">{item.sub}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center max-w-3xl bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300">
        <p className="text-slate-600 italic text-xl">
          “这四类延伸业务正是我们的创新点——突破‘一次性登记’的局限，实现产权全流程可控。”
        </p>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 4: Diff Table 1 ---
export const Slide4 = () => (
  <SlideCard pageNumber={4}>
    <SlideTitle>核心业务差异对比（一）</SlideTitle>
    <SlideSubtitle>本质与权益变化</SlideSubtitle>

    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm mt-8">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-5 border-b border-slate-200 font-bold text-slate-700 w-1/6 text-lg">维度</th>
            <th className="p-5 border-b border-slate-200 font-bold text-blue-700 w-1/6 text-lg">首次登记</th>
            <th className="p-5 border-b border-slate-200 font-bold text-slate-700 text-lg">变更登记</th>
            <th className="p-5 border-b border-slate-200 font-bold text-slate-700 text-lg">注销登记</th>
            <th className="p-5 border-b border-slate-200 font-bold text-slate-700 text-lg">转让登记</th>
            <th className="p-5 border-b border-slate-200 font-bold text-slate-700 text-lg">授权许可登记</th>
          </tr>
        </thead>
        <tbody className="text-base">
          <tr className="bg-white hover:bg-slate-50">
            <td className="p-5 border-b border-slate-100 font-semibold text-slate-900">业务本质</td>
            <td className="p-5 border-b border-slate-100 text-blue-600 font-medium">产权初始确立</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">已有产权信息更新</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">产权权利终止</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">所有权转移给新主体</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">使用权临时授权</td>
          </tr>
          <tr className="bg-slate-50/50 hover:bg-slate-50">
            <td className="p-5 border-b border-slate-100 font-semibold text-slate-900">用户高频需求度</td>
            <td className="p-5 border-b border-slate-100 text-blue-600 font-medium">初期高频（入场券）</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">中期高频（必选项）</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">低频关键（风险退出）</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">后期爆发（增值项）</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">持续高频（长尾刚需）</td>
          </tr>
          <tr className="bg-white hover:bg-slate-50">
            <td className="p-5 border-b border-slate-100 font-semibold text-slate-900">权益主体变化</td>
            <td className="p-5 border-b border-slate-100 text-blue-600 font-medium">新增主体（申请人）</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">主体不变</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">主体丧失权益</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">原主体退出，新主体进入</td>
            <td className="p-5 border-b border-slate-100 text-slate-600">主体不变，新增被许可人</td>
          </tr>
          <tr className="bg-slate-50/50 hover:bg-slate-50">
            <td className="p-5 border-slate-100 font-semibold text-slate-900">权利范围影响</td>
            <td className="p-5 border-slate-100 text-blue-600 font-medium">确立完整权利</td>
            <td className="p-5 border-slate-100 text-slate-600">权利范围不变（信息变）</td>
            <td className="p-5 border-slate-100 text-slate-600">权利完全灭失</td>
            <td className="p-5 border-slate-100 text-slate-600">权利完整转移</td>
            <td className="p-5 border-slate-100 text-slate-600">权利范围受限</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SlideCard>
);

// --- SLIDE 5: Diff Table 2 ---
export const Slide5 = () => (
  <SlideCard pageNumber={5}>
    <SlideTitle>核心业务差异对比（二）</SlideTitle>
    <SlideSubtitle>流程与结果</SlideSubtitle>

    <div className="grid grid-cols-5 gap-4 mt-10">
      {[
        { t: "首次登记", c: "bg-blue-600 text-white", p: "查重→申请→审核→公示→发证", r: "初始电子证书", i: "首次数据提交" },
        { t: "变更登记", c: "bg-white border-t-4 border-blue-400", p: "选择资产→修改→审核→公示→更新", r: "证书信息更新", i: "全量新数据同步" },
        { t: "注销登记", c: "bg-white border-t-4 border-red-400", p: "选择资产→申请→审核→公示→失效", r: "证书失效，归档", i: "终止状态同步" },
        { t: "转让登记", c: "bg-white border-t-4 border-green-400", p: "选择→双人确认→审核→公示→过户", r: "旧证失效，新主体获新证", i: "主体变更同步" },
        { t: "授权许可登记", c: "bg-white border-t-4 border-purple-400", p: "选择→约定条件→审核→公示→生效", r: "主证不变，新增许可证明", i: "许可信息同步" },
      ].map((card, idx) => (
        <div key={idx} className={`p-6 rounded-lg shadow-md flex flex-col ${card.c} ${idx !== 0 ? 'text-slate-700' : ''}`}>
          <h4 className="font-bold text-xl mb-6">{card.t}</h4>
          
          <div className="mb-6">
            <p className="text-sm uppercase opacity-70 mb-2">流程关键节点</p>
            <p className="text-base font-medium leading-tight">{card.p}</p>
          </div>
          
          <div className="mb-6">
            <p className="text-sm uppercase opacity-70 mb-2">证书/结果</p>
            <p className="text-base font-medium">{card.r}</p>
          </div>
          
          <div>
            <p className="text-sm uppercase opacity-70 mb-2">与国家平台交互</p>
            <p className="text-base font-medium">{card.i}</p>
          </div>
        </div>
      ))}
    </div>
  </SlideCard>
);

// --- SLIDE 6: Transfer vs First ---
export const Slide6 = () => (
  <SlideCard pageNumber={6}>
    <SlideTitle>转让登记 vs 首次登记</SlideTitle>
    <SlideSubtitle>“所有权转移”的特殊性</SlideSubtitle>

    <div className="flex gap-8 mt-6 h-3/4">
      {/* Left: First Reg */}
      <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><FileText size={100} /></div>
        <h3 className="text-3xl font-bold text-slate-800 mb-8">首次登记</h3>
        <ul className="space-y-6 text-slate-600 flex-1 text-lg">
          <li className="flex items-center gap-3"><span className="font-bold text-blue-600">核心动作：</span> 从无到有确立产权</li>
          <li className="flex items-center gap-3"><span className="font-bold text-blue-600">主体参与：</span> 单一申请人（单方）</li>
          <li className="flex items-center gap-3"><span className="font-bold text-blue-600">关键前提：</span> 无前置产权要求</li>
          <li className="flex items-center gap-3"><span className="font-bold text-blue-600">证书处理：</span> 生成全新初始证书</li>
          <li className="flex items-center gap-3"><span className="font-bold text-blue-600">核心校验：</span> 数据合规性、唯一性</li>
        </ul>
        <div className="mt-6 bg-white p-5 rounded-lg border border-slate-200 text-center">
          <span className="font-mono text-base text-slate-500">申请人 → 平台审核 → 发证</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-px bg-slate-200 self-center h-3/4"></div>

      {/* Right: Transfer */}
      <div className="flex-1 bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><RefreshCw size={100} className="text-blue-900" /></div>
        <h3 className="text-3xl font-bold text-blue-900 mb-8">转让登记</h3>
        <ul className="space-y-6 text-blue-800 flex-1 text-lg">
          <li className="flex items-center gap-3"><span className="font-bold">核心动作：</span> 从A到B转移完整所有权</li>
          <li className="flex items-center gap-3"><span className="font-bold">主体参与：</span> 转让方+受让方（双方）</li>
          <li className="flex items-center gap-3"><span className="font-bold">关键前提：</span> 必须基于“已登记且有效”的产权</li>
          <li className="flex items-center gap-3"><span className="font-bold">证书处理：</span> 原证书失效，受让方获新证书</li>
          <li className="flex items-center gap-3"><span className="font-bold">核心校验：</span> 双方资质、无未结清关联业务</li>
        </ul>
        <div className="mt-6 bg-white p-5 rounded-lg border border-blue-200 text-center shadow-sm">
          <span className="font-mono text-base text-blue-600">转让方 + 受让方 → 协议确认 → 审核 → 新证</span>
        </div>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 7: Licensing vs First ---
export const Slide7 = () => (
  <SlideCard pageNumber={7}>
    <SlideTitle>授权许可登记 vs 首次登记</SlideTitle>
    <SlideSubtitle>“使用权临时让渡”的边界</SlideSubtitle>

    <div className="flex items-center justify-around h-3/4">
      
      {/* Visualization */}
      <div className="relative w-96 h-96">
        {/* Outer Circle: First Registration */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-300 bg-slate-50 flex items-start justify-center pt-6 shadow-inner">
          <span className="font-bold text-slate-500 mt-2 text-xl">首次登记（完整权利）</span>
        </div>
        
        {/* Inner Circle: Licensing */}
        <div className="absolute top-24 left-12 right-12 bottom-12 rounded-full bg-blue-500/10 border-2 border-blue-500 flex items-center justify-center text-center p-6 backdrop-blur-sm">
          <span className="font-bold text-blue-700 text-xl">授权许可<br/><span className="text-lg font-normal">限定条件使用权<br/>有期限<br/>部分权利</span></span>
        </div>
      </div>

      {/* Comparison List */}
      <div className="w-1/2 space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <h4 className="font-bold text-xl mb-4 flex items-center gap-2"><Lock className="w-6 h-6 text-purple-600"/> 核心差异点</h4>
          <ul className="text-slate-600 space-y-4 text-base">
            <li className="grid grid-cols-3 gap-4 border-b pb-3">
              <span className="font-semibold">权利性质</span>
              <span>完整所有权</span>
              <span className="text-blue-600">限定条件的使用权</span>
            </li>
            <li className="grid grid-cols-3 gap-4 border-b py-3">
              <span className="font-semibold">时效性</span>
              <span>长期有效</span>
              <span className="text-blue-600">有明确期限或场景限制</span>
            </li>
            <li className="grid grid-cols-3 gap-4 py-3">
              <span className="font-semibold">主体关系</span>
              <span>单一产权人</span>
              <span className="text-blue-600">授权方（原产权人）+被许可方</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <p className="text-base text-yellow-800">
            <strong>比喻：</strong> 首次登记是“房东对房子的完整所有权”，授权许可则是“房东把房子租给租户，约定租期和用途”。
          </p>
        </div>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 8: Summary of Differences ---
export const Slide8 = () => (
  <SlideCard pageNumber={8}>
    <SlideTitle>全业务线差异总览</SlideTitle>
    <SlideSubtitle>创新点价值提炼</SlideSubtitle>

    <div className="space-y-6 mt-8">
      {[
        { t: "变更登记", d: "产权主体不变，仅信息更新（如“身份证换地址”）", k: "变更前后数据比对引擎、历史版本追溯机制", i: "bg-blue-50" },
        { t: "注销登记", d: "产权从有效到灭失（如“户口注销”）", k: "注销前关联业务校验（如是否有未到期许可）", i: "bg-red-50" },
        { t: "转让登记", d: "产权主体变更，权利完整转移（如“房产过户”）", k: "双方身份核验、权属链追溯、旧证自动失效逻辑", i: "bg-green-50" },
        { t: "授权许可登记", d: "产权主体不变，使用权临时让渡（如“房屋出租”）", k: "许可范围边界管控、期限自动失效、多被许可人管理", i: "bg-purple-50" },
      ].map((item, idx) => (
        <div key={idx} className={`flex items-center p-6 rounded-xl border border-slate-100 shadow-sm ${item.i}`}>
          <div className="w-44 font-bold text-xl text-slate-800">{item.t}</div>
          <div className="flex-1 px-6 border-l border-slate-300">
            <div className="text-slate-700 font-medium mb-1 text-lg">{item.d}</div>
          </div>
          <div className="w-[440px] text-base text-slate-500 pl-6 border-l border-slate-300">
            <span className="block font-bold text-slate-400 text-sm uppercase mb-1">系统设计关键点</span>
            {item.k}
          </div>
        </div>
      ))}
      
      <div className="mt-8 p-8 bg-slate-800 text-white rounded-xl flex items-center justify-between">
        <div>
          <h4 className="text-2xl font-bold">核心价值</h4>
          <p className="opacity-80 text-lg">突破“一次性登记”局限，实现“全生命周期动态管理”</p>
        </div>
        <div className="text-right">
          <p className="text-base opacity-60">合规性</p>
          <p className="text-base opacity-60">灵活性</p>
          <p className="text-base opacity-60">完整性</p>
        </div>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 9: Workload Estimation ---
export const Slide9 = () => (
  <SlideCard pageNumber={9}>
    <SlideTitle>开发工作量预估</SlideTitle>
    <SlideSubtitle>从0到1阶段（按3人团队估算约4个月）</SlideSubtitle>

    <div className="mt-8">
      <table className="w-full text-left text-base border-collapse">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="p-4 rounded-tl-lg text-lg">模块/业务</th>
            <th className="p-4 text-lg">前端页面数</th>
            <th className="p-4 text-lg">后端接口数</th>
            <th className="p-4 text-lg">工作量(人天)</th>
            <th className="p-4 rounded-tr-lg text-lg">说明</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr className="hover:bg-slate-50">
            <td className="p-4 font-medium">基础框架（登录/权限）</td>
            <td className="p-4">5</td><td className="p-4">8</td><td className="p-4">30</td>
            <td className="p-4 text-slate-500">含与国家平台鉴权对接</td>
          </tr>
          <tr className="bg-blue-50/50 hover:bg-blue-50">
            <td className="p-4 font-medium text-blue-700">首次登记</td>
            <td className="p-4 text-blue-700">12</td><td className="p-4 text-blue-700">8</td><td className="p-4 text-blue-700">60</td>
            <td className="p-4 text-blue-600">含查重、申请、审核、公示、赋码全流程</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 font-medium">变更登记</td>
            <td className="p-4">8</td><td className="p-4">5</td><td className="p-4">40</td>
            <td className="p-4 text-slate-500">含差异比对、版本管理</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 font-medium">注销登记</td>
            <td className="p-4">7</td><td className="p-4">4</td><td className="p-4">30</td>
            <td className="p-4 text-slate-500">含关联业务校验逻辑</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 font-medium">转让登记</td>
            <td className="p-4">9</td><td className="p-4">5</td><td className="p-4">45</td>
            <td className="p-4 text-slate-500">含双方确认、权属追溯</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 font-medium">授权许可登记</td>
            <td className="p-4">10</td><td className="p-4">5</td><td className="p-4">45</td>
            <td className="p-4 text-slate-500">含期限管控、许可范围校验</td>
          </tr>
          <tr className="hover:bg-slate-50">
            <td className="p-4 font-medium">公共模块（异议/公示）</td>
            <td className="p-4">6</td><td className="p-4">6</td><td className="p-4">30</td>
            <td className="p-4 text-slate-500">需适配全业务</td>
          </tr>
          <tr className="bg-slate-800 text-white font-bold text-lg">
            <td className="p-5 rounded-bl-lg">合计</td>
            <td className="p-5">57</td>
            <td className="p-5">41</td>
            <td className="p-5">320</td>
            <td className="p-5 rounded-br-lg"></td>
          </tr>
        </tbody>
      </table>
      
      <div className="flex gap-4 mt-8">
        <div className="flex-1 bg-slate-50 p-5 rounded border border-slate-200">
          <span className="block text-sm font-bold text-slate-400 uppercase">重点投入 1</span>
          <span className="text-xl font-semibold text-slate-800">首次登记基础流程 (18%)</span>
        </div>
        <div className="flex-[3] bg-blue-50 p-5 rounded border border-blue-200">
          <span className="block text-sm font-bold text-blue-400 uppercase">重点投入 2</span>
          <span className="text-xl font-semibold text-blue-800">四类延伸业务差异化逻辑 (53%) - 开发复杂度高</span>
        </div>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 10: Roadmap ---
export const Slide10 = () => (
  <SlideCard pageNumber={10}>
    <SlideTitle>项目迭代规划</SlideTitle>
    <SlideSubtitle>从MVP到全功能落地</SlideSubtitle>

    <div className="relative mt-20 px-8">
      {/* Timeline Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 transform -translate-y-1/2 z-0"></div>

      <div className="grid grid-cols-4 gap-6 relative z-10">
        
        {/* Phase 1 */}
        <div className="group">
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-lg h-56 flex flex-col justify-between mb-8 relative">
             <div className="absolute -bottom-10 left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white transform -translate-x-1/2"></div>
             <h4 className="font-bold text-blue-600 text-lg">一期</h4>
             <p className="text-sm text-slate-400 font-semibold uppercase">1-2个月</p>
             <p className="text-base text-slate-700 mt-2">打通首次登记全流程<br/>+ 基础框架</p>
             <div className="mt-2 text-sm bg-blue-50 text-blue-600 p-2 rounded inline-block w-fit">MVP交付</div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="group">
          <div className="bg-white border-2 border-slate-300 rounded-lg p-6 shadow-sm h-56 flex flex-col justify-between mb-8 relative opacity-80">
             <div className="absolute -bottom-10 left-1/2 w-4 h-4 bg-slate-400 rounded-full border-4 border-white transform -translate-x-1/2"></div>
             <h4 className="font-bold text-slate-700 text-lg">二期</h4>
             <p className="text-sm text-slate-400 font-semibold uppercase">3-4个月</p>
             <p className="text-base text-slate-700 mt-2">上线变更、注销登记<br/>+ 信息同步</p>
             <div className="mt-2 text-sm bg-slate-100 text-slate-600 p-2 rounded inline-block w-fit">动态更新</div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="group">
          <div className="bg-white border-2 border-slate-300 rounded-lg p-6 shadow-sm h-56 flex flex-col justify-between mb-8 relative opacity-80">
             <div className="absolute -bottom-10 left-1/2 w-4 h-4 bg-slate-400 rounded-full border-4 border-white transform -translate-x-1/2"></div>
             <h4 className="font-bold text-slate-700 text-lg">三期</h4>
             <p className="text-sm text-slate-400 font-semibold uppercase">5-6个月</p>
             <p className="text-base text-slate-700 mt-2">上线转让、授权许可<br/>+ 全业务贯通</p>
             <div className="mt-2 text-sm bg-slate-100 text-slate-600 p-2 rounded inline-block w-fit">流转场景</div>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="group">
          <div className="bg-white border-2 border-slate-300 rounded-lg p-6 shadow-sm h-56 flex flex-col justify-between mb-8 relative opacity-80">
             <div className="absolute -bottom-10 left-1/2 w-4 h-4 bg-slate-400 rounded-full border-4 border-white transform -translate-x-1/2"></div>
             <h4 className="font-bold text-slate-700 text-lg">四期</h4>
             <p className="text-sm text-slate-400 font-semibold uppercase">7-8个月</p>
             <p className="text-base text-slate-700 mt-2">优化体验 + 批量操作<br/>+ 数据分析看板</p>
             <div className="mt-2 text-sm bg-slate-100 text-slate-600 p-2 rounded inline-block w-fit">数据价值</div>
          </div>
        </div>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 11: Architecture ---
export const Slide11 = () => (
  <SlideCard pageNumber={11}>
    <SlideTitle>技术架构</SlideTitle>
    <SlideSubtitle>支撑全业务的“三横三纵”体系</SlideSubtitle>

    <div className="flex gap-4 h-3/4 mt-4">
      
      {/* Left: Verticals (Support) */}
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex-1 bg-slate-100 rounded-lg p-6 border border-slate-200 flex flex-col justify-center items-center text-center">
          <Shield className="mb-2 text-slate-500 w-8 h-8" />
          <h5 className="font-bold text-slate-700 text-lg">安全防护层</h5>
          <p className="text-sm text-slate-500 mt-2">数据加密、权限控制</p>
        </div>
        <div className="flex-1 bg-blue-50 rounded-lg p-6 border border-blue-100 flex flex-col justify-center items-center text-center">
          <Activity className="mb-2 text-blue-500 w-8 h-8" />
          <h5 className="font-bold text-blue-700 text-lg">业务规则引擎</h5>
          <p className="text-sm text-blue-500 mt-2">动态配置、版本管理</p>
        </div>
        <div className="flex-1 bg-slate-100 rounded-lg p-6 border border-slate-200 flex flex-col justify-center items-center text-center">
          <Globe className="mb-2 text-slate-500 w-8 h-8" />
          <h5 className="font-bold text-slate-700 text-lg">国家平台对接层</h5>
          <p className="text-sm text-slate-500 mt-2">接口适配、重试机制</p>
        </div>
      </div>

      {/* Right: Horizontals (Layers) */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Frontend */}
        <div className="h-1/3 bg-white shadow-md rounded-lg border-l-8 border-orange-400 p-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-xl">前端层</h4>
            <span className="text-sm font-mono bg-orange-100 text-orange-600 px-3 py-1 rounded">Vue3 + Element Plus</span>
          </div>
          <div className="flex gap-4 mt-6">
            <span className="bg-slate-50 border px-4 py-2 rounded text-base">表单引擎</span>
            <span className="bg-slate-50 border px-4 py-2 rounded text-base">流程可视化</span>
            <span className="bg-slate-50 border px-4 py-2 rounded text-base">Diff比对工具</span>
          </div>
        </div>

        {/* Backend */}
        <div className="h-1/3 bg-white shadow-md rounded-lg border-l-8 border-blue-600 p-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-xl">后端服务层</h4>
            <span className="text-sm font-mono bg-blue-100 text-blue-600 px-3 py-1 rounded">Spring Boot + Cloud</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <span className="bg-blue-50 border border-blue-100 px-4 py-2 rounded text-base text-blue-800">身份认证服务</span>
            <span className="bg-blue-50 border border-blue-100 px-4 py-2 rounded text-base text-blue-800">业务流程引擎</span>
            <span className="bg-blue-50 border border-blue-100 px-4 py-2 rounded text-base text-blue-800">数据同步服务</span>
          </div>
        </div>

        {/* Data */}
        <div className="h-1/3 bg-white shadow-md rounded-lg border-l-8 border-green-500 p-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-xl">数据层</h4>
            <span className="text-sm font-mono bg-green-100 text-green-600 px-3 py-1 rounded">MySQL + Redis + OSS</span>
          </div>
          <div className="flex gap-6 mt-6 items-center">
             <Database className="text-slate-400 w-6 h-6" />
             <span className="text-base text-slate-600">主数据库、缓存、文件存储</span>
          </div>
        </div>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 12: Challenges ---
export const Slide12 = () => (
  <SlideCard pageNumber={12}>
    <SlideTitle>技术攻坚</SlideTitle>
    <SlideSubtitle>三大核心难点的突破路径</SlideSubtitle>

    <div className="grid grid-cols-3 gap-8 mt-12">
      <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
          <RefreshCw className="text-blue-600 w-8 h-8" />
        </div>
        <h4 className="font-bold text-xl mb-4">接口协同性</h4>
        <p className="text-base text-red-500 font-medium mb-4">挑战：国家平台接口迭代</p>
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>解决方案：</strong> 接口适配层设计 + 自动化版本兼容测试。
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
          <Database className="text-green-600 w-8 h-8" />
        </div>
        <h4 className="font-bold text-xl mb-4">数据一致性</h4>
        <p className="text-base text-red-500 font-medium mb-4">挑战：本地与国家平台延迟</p>
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>解决方案：</strong> 分布式事务(TCC) + 每日凌晨定时对账任务。
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
          <Layers className="text-purple-600 w-8 h-8" />
        </div>
        <h4 className="font-bold text-xl mb-4">复杂状态流转</h4>
        <p className="text-base text-red-500 font-medium mb-4">挑战：多业务状态冲突</p>
        <p className="text-base text-slate-600 leading-relaxed">
          <strong>解决方案：</strong> 状态机引擎 + 操作前互斥规则（如转让中禁止注销）。
        </p>
      </div>
    </div>
  </SlideCard>
);

// --- SLIDE 13: Risks ---
export const Slide13 = () => (
  <SlideCard pageNumber={13}>
    <SlideTitle>风险管控</SlideTitle>
    <SlideSubtitle>全周期风险的预判与化解</SlideSubtitle>

    <div className="mt-8 overflow-hidden rounded-lg shadow-sm border border-slate-200">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 text-slate-700 font-bold">
          <tr>
            <th className="p-5 border-b text-lg">风险类别</th>
            <th className="p-5 border-b w-1/3 text-lg">风险描述</th>
            <th className="p-5 border-b text-lg">影响</th>
            <th className="p-5 border-b w-1/3 text-lg">应对措施</th>
            <th className="p-5 border-b text-lg">责任部门</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-100">
            <td className="p-5 font-semibold text-base">业务风险</td>
            <td className="p-5 text-base text-slate-600">企业用户对流程不熟悉，操作失误率高</td>
            <td className="p-5"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-bold">中</span></td>
            <td className="p-5 text-base text-slate-600">开发操作指引视频、关键步骤二次确认、客服支持</td>
            <td className="p-5 text-base">产品+运营</td>
          </tr>
          <tr className="border-b border-slate-100">
            <td className="p-5 font-semibold text-base">技术风险</td>
            <td className="p-5 text-base text-slate-600">国家平台接口响应超时（如赋码失败）</td>
            <td className="p-5"><span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-bold">高</span></td>
            <td className="p-5 text-base text-slate-600">接口自动重试(3次)、人工介入通道、应急机制</td>
            <td className="p-5 text-base">技术+运维</td>
          </tr>
          <tr className="border-b border-slate-100">
            <td className="p-5 font-semibold text-base">合规风险</td>
            <td className="p-5 text-base text-slate-600">数据登记信息与实际不符（如虚假材料）</td>
            <td className="p-5"><span className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-bold">高</span></td>
            <td className="p-5 text-base text-slate-600">对接工商接口验真、随机抽查人工复核、黑名单</td>
            <td className="p-5 text-base">审核+法务</td>
          </tr>
          <tr>
            <td className="p-5 font-semibold text-base">进度风险</td>
            <td className="p-5 text-base text-slate-600">三期功能开发延期（转让/授权逻辑复杂）</td>
            <td className="p-5"><span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-bold">中</span></td>
            <td className="p-5 text-base text-slate-600">优先开发核心流程、非核心功能延后、增加后端资源</td>
            <td className="p-5 text-base">项目管理部</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SlideCard>
);

// --- SLIDE 14: Benefits ---
export const Slide14 = () => (
  <SlideCard pageNumber={14}>
    <SlideTitle>预期效益与价值</SlideTitle>
    <SlideSubtitle>从业务到社会的多维收益</SlideSubtitle>

    <div className="grid grid-cols-3 gap-8 mt-12 h-3/5">
      
      {/* Business */}
      <div className="bg-white border-t-4 border-blue-500 shadow-lg p-8 flex flex-col items-center text-center">
        <div className="mb-8 p-5 bg-blue-50 rounded-full">
          <Clock className="w-12 h-12 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">业务效益</h3>
        <p className="text-5xl font-bold text-blue-600 mb-4">-90%</p>
        <p className="text-base text-slate-500 mb-4">材料成本降低</p>
        <p className="text-base text-slate-600 leading-relaxed">
          首次登记流程从线下3天缩短至线上4小时。系统自动校验减少40%人工审核工作量。
        </p>
      </div>

      {/* Economic */}
      <div className="bg-white border-t-4 border-green-500 shadow-lg p-8 flex flex-col items-center text-center">
        <div className="mb-8 p-5 bg-green-50 rounded-full">
          <TrendingUp className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">经济价值</h3>
        <p className="text-5xl font-bold text-green-600 mb-4">+30%</p>
        <p className="text-base text-slate-500 mb-4">增加交易机会</p>
        <p className="text-base text-slate-600 leading-relaxed">
           帮助企业快速确权实现数据资产化。通过增值服务预计3年内收回开发成本。
        </p>
      </div>

      {/* Social */}
      <div className="bg-white border-t-4 border-purple-500 shadow-lg p-8 flex flex-col items-center text-center">
        <div className="mb-8 p-5 bg-purple-50 rounded-full">
          <Globe className="w-12 h-12 text-purple-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">社会价值</h3>
        <p className="text-xl font-bold text-purple-600 mb-4 mt-4">行业规范化</p>
        <p className="text-base text-slate-500 mb-4">可推广样本</p>
        <p className="text-base text-slate-600 leading-relaxed">
          规范转让/授权行为，降低交易纠纷。形成可复制的“全生命周期管理”方案。
        </p>
      </div>

    </div>
  </SlideCard>
);

// --- SLIDE 15: Conclusion ---
export const Slide15 = () => (
  <SlideCard pageNumber={15}>
    <SlideTitle>总结与下一步计划</SlideTitle>
    <SlideSubtitle>构建数据产权管理的“全生命周期生态”</SlideSubtitle>

    <div className="flex flex-col h-full pb-10">
      
      <div className="bg-slate-50 p-8 rounded-lg mb-8 border border-slate-200">
        <h4 className="font-bold text-slate-800 mb-4 text-xl">核心结论</h4>
        <p className="text-slate-600 text-xl">
          我们不仅是在做一个登记工具，而是在构建一个<span className="text-blue-600 font-bold">可确权、可流转、可监管</span>的生态系统。
          预计8个月内实现全功能落地，风险可控，效益显著。
        </p>
      </div>

      <div className="flex-1">
        <h4 className="font-bold text-slate-800 mb-6 text-xl">下一步计划</h4>
        <div className="space-y-6">
          <div className="flex items-center">
             <div className="w-24 font-bold text-slate-400 text-lg">1个月内</div>
             <div className="flex-1 bg-blue-100 p-4 rounded-r-lg border-l-4 border-blue-600 text-base font-medium">完成需求细化与方案评审 -> 启动一期开发（首次登记）</div>
          </div>
          <div className="flex items-center">
             <div className="w-24 font-bold text-slate-400 text-lg">2-3个月</div>
             <div className="flex-1 bg-slate-100 p-4 rounded-r-lg border-l-4 border-slate-400 text-base font-medium">与国家平台完成接口联调 -> 上线MVP版本</div>
          </div>
          <div className="flex items-center">
             <div className="w-24 font-bold text-slate-400 text-lg">7-8个月</div>
             <div className="flex-1 bg-slate-100 p-4 rounded-r-lg border-l-4 border-slate-400 text-base font-medium">邀请试点企业验证 -> 正式上线并提供运维支持</div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          "让数据真正成为核心生产要素"
        </h2>
        <p className="text-slate-500 mt-2 text-xl">助力国家数据产权制度改革落地</p>
      </div>
    </div>
  </SlideCard>
);