import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Image,
  FileText,
  Table2,
  Code,
  FileUp,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Layers,
  Zap,
  Check,
  Compass,
  GitFork,
  Plus
} from "lucide-react";

export const ProjectIntent = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const scatteredNodes = [
    {
      id: 7,
      label: "临时想法",
      desc: "日常用闪念笔记写下的一层浅思",
      icon: <Lightbulb size={16} />,
      color: "bg-yellow-50 text-yellow-700 border-yellow-100/80 shadow-yellow-50/50",
      position: "lg:top-20 lg:left-80"
    },
    {
      id: 3,
      label: "Markdown",
      desc: "随手记下的代码与临时文档",
      icon: <FileText size={16} />,
      color: "bg-emerald-50 text-emerald-600 border-emerald-100/80 shadow-emerald-50/50",
      position: "lg:bottom-6 lg:left-8"
    },
    {
      id: 8,
      label: "思维导图",
      desc: "纵向发散与逻辑层级大纲树",
      icon: <GitFork size={16} />,
      color: "bg-cyan-50 text-cyan-600 border-cyan-100/80 shadow-cyan-50/50",
      position: "lg:top-24 lg:left-96"
    },
    {
      id: 1,
      label: "网页链接",
      desc: "一键收藏的深度好文与观点",
      icon: <Globe size={16} />,
      color: "bg-blue-50 text-blue-600 border-blue-100/80 shadow-blue-50/50",
      position: "lg:top-4 lg:left-12"
    },
    {
      id: 2,
      label: "视觉截图",
      desc: "图表、网页截图或幻灯片",
      icon: <Image size={16} />,
      color: "bg-rose-50 text-rose-600 border-rose-100/80 shadow-rose-50/50",
      position: "lg:top-28 lg:left-6"
    },
    {
      id: 4,
      label: "数据表格",
      desc: "运营月报、排期表的局部碎片",
      icon: <Table2 size={16} />,
      color: "bg-amber-50 text-amber-600 border-amber-100/80 shadow-amber-50/50",
      position: "lg:top-12 lg:left-48"
    },
    {
      id: 5,
      label: "代码片段",
      desc: "偶尔收藏到的精华代码行",
      icon: <Code size={16} />,
      color: "bg-indigo-50 text-indigo-600 border-indigo-100/80 shadow-indigo-50/50",
      position: "lg:top-36 lg:left-40"
    },
    {
      id: 6,
      label: "文件资料",
      desc: "随时交叉对比的需求 PDFs",
      icon: <FileUp size={16} />,
      color: "bg-violet-50 text-violet-600 border-violet-100/80 shadow-violet-50/50",
      position: "lg:bottom-4 lg:left-44"
    },
    {
      id: 9,
      label: "更多元素",
      desc: "无限扩展的高级自持模块...",
      icon: <Plus size={16} />,
      color: "bg-slate-50 text-slate-500 border-slate-100/80 shadow-slate-50/50",
      position: "lg:bottom-12 lg:left-96"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-20">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 rounded-full border border-slate-200 backdrop-blur-sm">
          <Sparkles size={12} className="text-brand-accent-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">PROJECT INTENT / 项目初衷</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          为什么是 <span className="text-brand-accent-700 font-extrabold">FreeFlow</span>？
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-50/50 rounded-[3rem] border border-slate-100 p-8 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-100/40 rounded-full blur-[80px] pointer-events-none" />

        <div className="lg:col-span-6 space-y-8 text-left relative z-10">
          <div className="space-y-3">
            <span className="text-[10px] font-black text-brand-narrow tracking-[0.2em] text-slate-400 uppercase">THE PARADIGM SHIFT</span>
            <div className="w-10 h-0.5 bg-brand-accent rounded-full" />
          </div>

          <div className="text-xl md:text-2xl lg:text-[25px] xl:text-[28px] font-black text-slate-900 leading-relaxed tracking-tight space-y-2">
            <div className="block lg:whitespace-nowrap">
              很多知识工作并不是从
              <span className="relative inline-block mx-1.5 text-slate-400 font-semibold line-through decoration-brand-accent decoration-2 line-through-offset-4">
                空白文档
              </span>
              开始的，
            </div>
            <div className="block lg:whitespace-nowrap">
              而是从各种
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent-800 font-extrabold mx-1.5 align-middle">
                零散节点
              </span>
              开始的。
            </div>
          </div>

          <p className="text-slate-500 font-bold text-sm leading-relaxed max-w-lg">
            在现实中，我们的灵感、参考与逻辑极少是以完美的线性格式出现的。它们天然就碎片化，散落于我们的应用堆栈和大脑瞬时思维中。
          </p>

          <div className="p-5 bg-white rounded-2xl border border-slate-100/80 shadow-sm flex items-start gap-3.5 max-w-md">
            <Compass className="text-brand-accent h-5 w-5 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-black text-slate-800 uppercase tracking-wider">FreeFlow 核心定位</p>
              <p className="text-xs font-bold text-slate-500 leading-normal mt-1">
                不是“再做一个无限画布”，而是让画布成为结构化内容进入、组织、沉淀、和交付的
                <span className="text-brand-accent-700 font-extrabold"> 中间工作台 </span>。
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 min-h-[340px] bg-white rounded-3xl border border-slate-100 shadow-md shadow-slate-100/50 relative overflow-hidden p-6 md:p-8 flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            </div>
            <span className="text-xs font-black text-brand-accent-800 tracking-tight text-left sm:text-right bg-brand-accent-50/50 px-2.5 py-1 rounded-lg border border-brand-accent/10">
              FreeFlow 画布：承接以上元素类型的中间工作台
            </span>
          </div>

          <div className="relative py-6 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {scatteredNodes.map((node) => (
                <motion.div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  whileHover={{ scale: 1.03 }}
                  className={`flex items-center gap-2.5 p-3 rounded-2xl border bg-white shadow-sm cursor-default transition-all duration-300 ${
                    hoveredNode === node.id
                      ? "ring-2 ring-brand-accent-200 border-brand-accent text-brand-narrow"
                      : "text-slate-700 border-slate-100 hover:border-slate-300"
                  }`}
                >
                  <div className={`p-1.5 rounded-lg shrink-0 ${node.color.split(" ")[0]} ${node.color.split(" ")[1]}`}>
                    {node.icon}
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-xs font-black tracking-tight leading-none text-slate-800 truncate">{node.label}</p>
                    <p className="text-[9px] font-bold text-slate-400 mt-1 truncate">
                      {node.desc || "待整理碎片"}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="col-span-2 md:col-span-3 mt-4 bg-gradient-to-r from-brand-accent/5 via-brand-accent to-brand-accent/5 p-[1px] rounded-2xl shadow-sm">
                <div className="bg-white/95 py-3 px-4 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2 text-left">
                    <Sparkles size={14} className="text-brand-accent animate-pulse" />
                    <div>
                      <p className="text-xs font-black text-slate-800 leading-none">结构化整合中心</p>
                      <p className="text-[9px] font-bold text-slate-400 mt-1">
                        随时组合并一键导出 Word / PDF / Markdown / Excel
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-brand-accent font-black text-xs shrink-0">
                    <span className="font-mono text-[10px]">OUTPUT</span>
                    <ArrowRight size={12} className="animate-bounce-horizontal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50/30 rounded-[3rem] border border-slate-100 p-8 md:p-12 lg:p-14 relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">FreeFlow</span>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">从传统两极，进化至无限画布级中间工作台</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            <div className="p-8 md:p-10 bg-white border border-rose-100/60 rounded-[2rem] text-left relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center min-h-[180px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-rose-50/50 rounded-full blur-xl pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <h4 className="text-xl font-black text-slate-900 tracking-tight">传统白板：发散而无法落地</h4>
                <p className="text-slate-500 font-bold text-xs leading-relaxed opacity-95">
                  极佳的前期灵感与头脑风暴载图，但在工作收口时，因为内容过于零散且没有结构，面临无法编辑、导出或快速排版生成交付大纲的短板。
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white border border-amber-100/60 rounded-[2rem] text-left relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-center min-h-[180px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50/50 rounded-full blur-xl pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <h4 className="text-xl font-black text-slate-900 tracking-tight">传统文档：规范但束缚思维</h4>
                <p className="text-slate-500 font-bold text-xs leading-relaxed opacity-95">
                  极好的高可编辑性与最终报告排版。但在开始工作阶段，由于过早用教条格式“线性约束”思路，难以容纳网页观点、截图、代码、文件及灵感闪念。
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-slate-200 to-brand-accent relative">
            <div className="absolute top-0 -left-4 w-9 h-[1px] bg-slate-200" />
            <div className="absolute top-0 left-0 w-px h-12 bg-indigo-200" />
            <div className="absolute bottom-0 -left-[5px] w-3 h-3 rounded-full bg-brand-accent shadow-sm shadow-brand-accent-300" />
          </div>

          <div className="w-full max-w-3xl p-8 md:p-10 bg-gradient-to-br from-brand-accent-50/10 via-white to-brand-accent-50/30 border-2 border-brand-accent/30 rounded-[2.5rem] shadow-xl shadow-brand-accent-50/10 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none animate-pulse" />

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-3">
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                  FreeFlow / 画布即中间件
                </h4>
                <p className="text-slate-500 font-bold text-xs leading-relaxed max-w-xl mx-auto">
                  完美打通两端隔阂！先通过<span className="text-slate-800 font-extrabold">白板画作</span>无差别承接任意形状的原始素材（网页、代码、图片、表格及闪念想法），通过自在平铺进行因果逻辑梳理；后一键完成<span className="text-brand-accent-700 font-extrabold">大纲提取与结构化文档排版导出</span>，实现极速落地。
                </p>
              </div>

              <div className="pt-5 border-t border-brand-accent/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs font-black">
                <div className="flex items-center gap-1.5 text-rose-600">
                  <Check size={12} strokeWidth={3} />
                  <span>将发散顺滑收敛成交付</span>
                </div>
                <div className="h-3 w-px bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Check size={12} strokeWidth={3} />
                  <span>融合文档收敛的高效落地</span>
                </div>
                <div className="h-3 w-px bg-slate-200 hidden sm:block" />
                <div className="flex items-center gap-1.5 text-brand-accent-700">
                  <Check size={12} strokeWidth={3} />
                  <span>顺滑交付：终结效率黑洞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
